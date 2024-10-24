import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// Initialize SES client
const ses = new SESClient({ region: process.env.MY_AWS_REGION });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const params = {
      Source: process.env.REACT_APP_SENDER_EMAIL,
      Destination: {
        ToAddresses: [process.env.REACT_APP_RECEIVER_EMAIL],
      },
      Message: {
        Subject: { Data: `Contact form submission from ${name}` },
        Body: {
          Text: { Data: `You have received a new message from ${name} (${email}):\n\n${message}` },
        },
      },
    };

    try {
      const command = new SendEmailCommand(params);
      await ses.send(command);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
