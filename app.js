var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();
var cors = require('cors');
var getAllProvinceBasic = require('./api/getAllProvinceBasic');
var getCountryNewsCN = require('./api/getCountryNewsCN');
var getProvinceNewsCN = require('./api/getProvinceNewsCN');
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/getAllProvinceBasic', getAllProvinceBasic);
app.get('/getProvinceNewsCN', getProvinceNewsCN);
app.get('/getCountryNewsCN', getCountryNewsCN);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
