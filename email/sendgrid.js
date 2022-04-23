const sgMail = require('@sendgrid/mail');
require('dotenv').config()

sgMail.setApiKey(process.env.sendgrid);

let sendotp=(To,otp)=>{
const msg = {
  to: To,
  from: 'no-reply@starvens.com', // Use the email address or domain you verified above
  subject: 'OTP verification',
  // text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>OTP: '+otp+'</strong>',
};
//ES6
sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
}

module.exports=sendotp