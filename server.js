const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const multer = require('multer');
const util = require('util');
var nodemailer = require('nodemailer');

const TRANSPORTER = 'gmail';
const TRANSPORTER_EMAIL = 'eliran.natan.87@gmail.com';
const TRANSPORTER_PASS = 'zeteigabaryvppvo';

const sendResponseEmail = (info) => {

  var transporter = nodemailer.createTransport({
    service: TRANSPORTER,
    auth: {
      user: TRANSPORTER_EMAIL,
      pass: TRANSPORTER_PASS
    }
  });
  
  var mailOptions = {
    from: TRANSPORTER_EMAIL,
    to: info.requesterEmail,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}

const sendRegistrationEmail = (info, file) => {

  var transporter = nodemailer.createTransport({
    service: TRANSPORTER,
    auth: {
      user: TRANSPORTER_EMAIL,
      pass: TRANSPORTER_PASS
    }
  });
  
  var mailOptions = {
    from: TRANSPORTER_EMAIL,
    to: TRANSPORTER_EMAIL,
    subject: 'Registration request',
    text: `
      studentFirstName: ${info.studentFirstName}, 
      studentLastName: ${info.studentLastName},
      studentClass: ${info.studentClass},
      requesterFirstName: ${info.requesterFirstName},
      requesterLastName: ${info.requesterLastName},
      requesterRelation: ${info.requesterRelation},
      requesterPhoneNumber: ${info.requesterPhoneNumber},
      requesterEmail: ${info.requesterEmail},    
    `,
    attachments: [
      {
        filename: file.originalname,
        content: new Buffer.from(file.buffer)
      }
    ]
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/login', function (req, res, next) {
  res.json({
    token: 123
  })
})

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'))

/*
app.use('/open-registration-request', multer().any(), function (req, res, next) {

  console.log(req.body.studentFirstName)
  console.log(req.body.studentLastName)
  console.log(req.body)
  console.log(req.files)

  sendResponseEmail(req.body)
  sendRegistrationEmail(req.body, req.files[0])
});
*/
