var data = require('../public/data/DXYArea-TimeSeries.json');
var provinces = [
  '北京市',
  '河北省',
  '山西省',
  '辽宁省',
  '吉林省',
  '黑龙江省',
  '江苏省',
  '浙江省',
  '安徽省',
  '福建省',
  '江西省',
  '山东省',
  '河南省',
  '湖北省',
  '湖南省',
  '广东省',
  '海南省',
  '四川省',
  '贵州省',
  '云南省',
  '陕西省',
  '甘肃省',
  '青海省',
  '天津市',
  '上海市',
  '重庆市',
  '内蒙古自治区',
  '广西壮族自治区',
  '西藏自治区',
  '宁夏回族自治区',
  '新疆维吾尔自治区',
  '台湾',
  '香港',
  '澳门',
];
var getAllProvinceBasic = function (req, res) {
  let start = req.query.start;
  let end = req.query.end;
  let resdata = {
    status: 200,
    province: [],
  };
  for (let i = 0; i < provinces.length; i++) {
    let pItem = {
      pro_name: provinces[i],
      pro_area: '面积',
      pro_population: '人口',
      pro_whole: {
        confirmed: '感染总数',
        death: '死亡总数',
        cure: '治愈总数',
      },
      pro_data: [],
    };
    let datad = data
      .filter(
        (item) => item.provinceName === '浙江省'

        // item.updateTime >= Date.parse('2020/3/1') &&
        // item.updateTime < Date.parse('2020/4/5') + 86400000
      )
      .map(function (d) {
        let temp = {
          pro_confirmed: d.confirmedCount,
          pro_death: d.deadCount,
          pro_cure: d.curedCount,
          time: new Date(d.updateTime).toDateString(),
        };
        return temp;
      });
    let datam = [];
    let obj = {};
    datad.forEach(function (d) {
      if (!obj[d.time]) {
        obj[d.time] = 'lap';
        datam.push(d);
      }
    });
    datam.sort(function (a, b) {
      return Date.parse(a.time) > Date.parse(b.time) ? 1 : -1;
    });
    pItem.pro_whole.confirmed = datam[datam.length - 1].pro_confirmed;
    pItem.pro_whole.death = datam[datam.length - 1].pro_death;
    pItem.pro_whole.cure = datam[datam.length - 1].pro_cure;

    pItem.pro_data = datam.filter(
      (item) =>
        Date.parse(item.time) >= Date.parse(start) &&
        Date.parse(item.time) < Date.parse(end) + 86400000
    );
    console.log(pItem.pro_data);
    resdata.province.push(pItem);
  }
  res.send(resdata);
};
module.exports = getAllProvinceBasic;
