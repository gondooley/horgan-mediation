import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// const myRegion = process.env.MY_AWS_REGION || 'eu-west-1';
// const senderEmail = process.env.REACT_APP_SENDER_EMAIL || 'ger@yourapp.ie';
// const receiverEmail = process.env.REACT_APP_RECEIVER_EMAIL || 'for_tadgh@yourapp.ie';

const myRegion = process.env.MY_AWS_REGION;
const senderEmail = process.env.SENDER_EMAIL;
const receiverEmail = process.env.RECEIVER_EMAIL;


// Initialize SES client
// const ses = new SESClient({ region: myRegion });

const ses = new SESClient({ region: myRegion });

export default async function handler(req, res) {
  console.log('API Route Invoked'); // Check if the API route is hit
  console.log('My region: ', myRegion);
  console.log(`Request Method: ${req.method}`); // Log the request method

  if (req.method === 'POST') {
    console.log('POST request received'); // Confirm POST request
    const { name, email, message } = req.body;

    // Log the received data
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

    // Log the parameters being sent to SES
    console.log('SES Parameters:', params);

    try {
      const command = new SendEmailCommand(params);
      console.log('Sending email...'); // Log when sending email
      await ses.send(command);
      console.log('Email sent successfully'); // Confirm successful sending
      res.status(200).json({ message: 'Email sent successfully!' });
      // notifyUserOfSuccess({"userEmail": email})
    } catch (error) {
      console.error('Error sending email:', error); // Log any errors
      res.status(500).json({ message: 'Failed to send email.', error: error.message });
    }
  } else {
    console.warn('Method not allowed'); // Warn if method is not allowed
    res.status(405).json({ message: 'Method not allowed.' });
  }
}

function notifyUserOfSuccess({ userEmail }) {
  console.log('Sending transactional email notifying website user that their message has been sent.');

  const params = {
    Source: 'auto@horganmediation.ie',
    Destination: {
      ToAddresses: [userEmail],
    },
    Message: {
      Subject: { Data: `Contact form submission from ${name}` },
      Body: {
        Text: { Data: `You have received a new message from ${name} (${email}):\n\n${message}` },
      },
    },
  };
}
