var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Newsdata = require('./public/data/DXYNews-TimeSeries.json');
var app = express();
var cors = require('cors');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/getProvinceNewsCN', function (req, res) {
  let start = req.query.start;
  let end = req.query.end;
  let province = req.query.province;
  let data = {
    status: 200,
    news_cn: [],
  };
  var dx = Newsdata.filter(
    (item) =>
      item.provinceName === province &&
      item.pubDate >= Date.parse(start) &&
      item.pubDate < Date.parse(end) + 86400000
  ).sort(function (a, b) {
    return a.pubDate > b.pubDate ? 1 : -1;
  });
  dx.forEach(function (d) {
    let ni = {};
    ni.news_link = d.sourceUrl;
    ni.news_title = d.title;
    ni.news_time = d.pubDate;
    ni.news_owner = d.infoSource;
    data.news_cn.push(ni);
  });
  res.send(data);
});

app.get('/getCountryNewsCN', function (req, res) {
  let start = req.query.start;
  let end = req.query.end;
  let data = {
    status: 200,
    news_cn: [],
  };
  var dx = Newsdata.filter(
    (item) =>
      item.provinceName === '全国' &&
      item.pubDate >= Date.parse(start) &&
      item.pubDate < Date.parse(end) + 86400000
  ).sort(function (a, b) {
    return a.pubDate > b.pubDate ? 1 : -1;
  });
  dx.forEach(function (d) {
    let ni = {};
    ni.news_link = d.sourceUrl;
    ni.news_title = d.title;
    ni.news_time = d.pubDate;
    ni.news_owner = d.infoSource;
    data.news_cn.push(ni);
  });
  res.send(data);
});

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
