const express = require('express');
const http = require('http');
const cors = require('cors')
const bodyParser = require('body-parser');
const multer = require('multer');
const util = require('util');
const path = require('path');
var nodemailer = require('nodemailer');

const PORT = 3001;
const app = express();
app.server = http.createServer(app);

app.use(cors({
  exposedHeaders: "*"
}));

const courses = [
  {
      id: 1,
      title: "אוקטובר — נובמבר",
      description: "החל ביום חמישי, 03 לאוקטובר 2022",
      freeSpots: 0
  },
  {
      id: 2,
      title: "דצמבר — ינואר",
      description: "החל ביום חמישי, 03 לאוקטובר 2022",
      freeSpots: 2
  },
  {
      id: 3,
      title: "פברואר — מרץ",
      description: "החל ביום חמישי, 03 לאוקטובר 2022",
      freeSpots: 5
  }
]

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());

app.use('/login', (req, res) => res.send('Hello World!'))

app.use('/api/get-courses', (req, res) => res.send(courses))

app.use(bodyParser.json({
  limit: '50mb'
}));

// static www files use express
const wwwPath = path.join(__dirname, 'www');
app.use('/', express.static(wwwPath));

app.get('/api/login', (req, res, next) => {
  return res.status(200).json({
      token: 123
  });
});


app.listen(process.env.PORT || 9090, () => {
  console.log(`App is running on port 9090`);
});



//app.listen(8080, () => console.log('API is running on http://localhost:8080/login'))

/*
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

*/



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
