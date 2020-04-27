var fs = require('fs');
var data = require('./public/data/DXYNews-TimeSeries.json');
var dx = data
  .filter(
    (item) =>
      item.provinceName === '浙江省' &&
      item.createTime >= Date.parse('2020/1/22') &&
      item.createTime < Date.parse('2020/1/26')
  )
  .sort(function (a, b) {
    return a.createTime > b.createTime;
  });
dx.forEach(function (d) {
  let date = new Date(d.pubDate);
  d.pubDate =
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
});

console.log(dx);
