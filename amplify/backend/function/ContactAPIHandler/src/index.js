const contactHandler = require('./contact');

exports.handler = async (event) => {
  console.log('Handler started');
  console.log(`EVENT: ${JSON.stringify(event)}`);
  
  const response = await contactHandler(event);
  
  console.log('Handler finished');
  return response;
};

