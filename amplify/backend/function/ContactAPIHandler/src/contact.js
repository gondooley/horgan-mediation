const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');
const { STSClient, GetCallerIdentityCommand } = require('@aws-sdk/client-sts');

const myRegion = 'eu-west-1';
const senderEmail = 'servermanagement@yourapp.ie';
const receiverEmail = 'horganmediation@yourapp.ie';

const handler = async (event) => {
  try {
    await checkSTS();
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*', // Add CORS header
      },
      body: JSON.stringify({ message: 'Invalid AWS credentials' }),
    };
  }

  if (event.httpMethod === 'POST') {
    const { name, email, message } = JSON.parse(event.body);
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

    try {
      const ses = new SESClient({ region: myRegion });
      const command = new SendEmailCommand(params);
      await ses.send(command);
      console.log('Email sent successfully');
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*', // Add CORS header
        },
        body: JSON.stringify({ message: 'Email sent successfully!' }),
      };
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*', // Add CORS header
        },
        body: JSON.stringify({ message: 'Failed to send email.', error: error.message }),
      };
    }
  } else {
    console.warn('Method not allowed');
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*', // Add CORS header
      },
      body: JSON.stringify({ message: 'Method not allowed.' }),
    };
  }
};

const checkSTS = async () => {
  const stsClient = new STSClient({ region: myRegion });
  const command = new GetCallerIdentityCommand({});
  try {
    const response = await stsClient.send(command);
  } catch (error) {
    console.error('Error checking STS permissions:', error.message);
  }
};

module.exports = handler;
