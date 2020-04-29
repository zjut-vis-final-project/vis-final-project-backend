var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var cors = require('cors');
var getAllProvinceBasic = require('./api/getAllProvinceBasic');
var getCountryNewsCN = require('./api/getCountryNewsCN');
var getProvinceNewsCN = require('./api/getProvinceNewsCN');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/getAllProvinceBasic', getAllProvinceBasic);
app.get('/getProvinceNewsCN', getProvinceNewsCN);
app.get('/getCountryNewsCN', getCountryNewsCN);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
