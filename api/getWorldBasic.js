var data_origin = require('../public/data/DXYOverall-TimeSeries.json');
var data_s = [];
data_origin.forEach((item) => {
  if (item.globalStatistics) {
    let temp = {
      globalStatistics: item.globalStatistics,
      updateTime: item.updateTime,
    };
    data_s.push(temp);
  }
});
var data_m = data_s
  .sort(function (a, b) {
    return a.updateTime > b.updateTime ? 1 : -1;
  })
  .map(function (item) {
    let temp = {
      globalStatistics: item.globalStatistics,
      updateTime: new Date(item.updateTime).toDateString(),
    };
    return temp;
  });
let datam = [];
let obj = {};
data_m.forEach(function (d) {
  if (!obj[d.updateTime]) {
    obj[d.updateTime] = 'lap';
    datam.push(d);
  }
});
console.log(datam);
