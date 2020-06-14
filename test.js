var data_origin = require('./public/data/DXYRumors-TimeSeries.json');
var data_s = data_origin.sort((a, b) => {
  a.crawlTime < b.crawlTime ? 1 : -1;
});
console.log(data_s);
