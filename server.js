const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const multer = require('multer');
const util = require('util');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/open-registration-request', multer().any(), function (req, res, next) {
  console.log(req.body.studentFirstName)
  console.log(req.body.studentLastName)
  console.log(req.body)
  console.log(req.files)
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));