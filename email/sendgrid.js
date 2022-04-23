const sgMail = require('@sendgrid/mail');
require('dotenv').config()

sgMail.setApiKey(process.env.sendgrid);

let sendotp=(To,otp)=>{
const msg = {
  to: To,
  from: 'no-reply@starvens.com', // Use the email address or domain you verified above
  subject: 'OTP verification',
  template_id:'d-470688d8529c4cc3aad629e7005ef376',
  dynamic_template_data:{
    subject: "Starvens Email Verification OTP is "+otp,
    otp:otp
  },
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