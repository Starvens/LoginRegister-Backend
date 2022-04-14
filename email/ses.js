var AWS = require('aws-sdk');
require('dotenv').config();
// console.log(process.env.secret_access)

AWS.config.update({region: 'us-east-2'});
const SES_CONFIG = {
    accessKeyId: process.env.access_key1,
    secretAccessKey: process.env.secret_access1.trim(),
    region: 'us-east-2',
};

const AWS_SES = new AWS.SES(SES_CONFIG);

let sendEmail = (recever, name) => {
let params = {
    Source: 'no-reply@starvens.com',
    Destination: {
      ToAddresses: [
        recever
      ],
    },
    ReplyToAddresses: [],
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: 'This is the body of my email!',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Hello, ${name}!`,
      }
    },
  };
// Create the promise and SES service object

var sendPromise = AWS_SES.sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
  function(data) {
    console.log('data',data.MessageId);
  }).catch(
    function(err) {
    console.error('error',err);
  });
}

sendEmail('','pratheek')

module.exports = {
    sendEmail
  };
