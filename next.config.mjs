/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MY_AWS_REGION: process.env.MY_AWS_REGION,
    SENDER_EMAIL: process.env.SENDER_EMAIL,
    RECEIVER_EMAIL: process.env.RECEIVER_EMAIL,
  },
};

export default nextConfig;