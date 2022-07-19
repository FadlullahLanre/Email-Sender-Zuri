const nodemailer = require('nodemailer')
const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.listen(port, () => {
    console.log(`Nodemailer is listening at http://localhost:${port}`)
})




// Transporter Object
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret:  process.env.OAUTH_CLIENT_SECRET ,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });


  // Mail Option Object
  let mailOptions = {
    
    from:'"Fadlu Lanre" <fadlulanre@gmail.com>',
    to: '<fadlullahlanre@gmail.com>',
    subject: 'Zuri Nodemailer Project',
    text: 'Hi from your nodemailer project'
  };


  // Send Mail Method

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });