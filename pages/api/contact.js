import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { STSClient, GetCallerIdentityCommand } from '@aws-sdk/client-sts';

const myRegion = process.env.MY_AWS_REGION;
const senderEmail = process.env.SENDER_EMAIL;
const receiverEmail = process.env.RECEIVER_EMAIL;

export default async function handler(req, res) {
  console.log('API Route Invoked'); 


  try {
    await checkSTS();
    console.log('AWS Credentials:', process.env.AWS_ACCESS_KEY_ID, process.env.AWS_SECRET_ACCESS_KEY);

  } catch (error) {
    res.status(500).json({ message: 'Invalid AWS credentials' });
    return;
  }

  console.log('My region: ', myRegion);
  console.log(`Request Method: ${req.method}`); 

  if (req.method === 'POST') {
    console.log('POST request received'); 
    const { name, email, message } = req.body;
    console.log('Received data:', { name, email, message });

    const params = {
      Source: senderEmail,
      Destination: {
        ToAddresses: [receiverEmail],
      },
      Message: {
        Subject: { Data: `Contact form submission from ${name}` },
        Body: {
          Text: { Data: `You have received a new message from ${name} (${email}):\n\n${message}` },
        },
      },
    };

    console.log('SES Parameters:', params);

    try {
      const ses = new SESClient({ region: myRegion });
      const command = new SendEmailCommand(params);
      console.log('Sending email...');
      await ses.send(command);
      console.log('Email sent successfully');
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email.', error: error.message });
    }
  } else {
    console.warn('Method not allowed');
    res.status(405).json({ message: 'Method not allowed.' });
  }
}

const checkSTS = async () => {
  const stsClient = new STSClient({ region: myRegion });

  console.log('STS Client Config:', stsClient.config);

  const command = new GetCallerIdentityCommand({});
  
  try {
    const response = await stsClient.send(command);
    console.log('Caller identity:', response);
  } catch (error) {
    console.error('Error checking STS permissions:', error.message);
  }
};
