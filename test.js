var data_origin = require('./public/data/DXYOverall-TimeSeries.json');
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
console.log(data_s);
