var datadata = require('./public/data/DXYArea-TimeSeries.json');
var fs = require('fs');
var _world = require('./public/data/world_countries.json');
var data = new Object(datadata).results;
var world = new Object(_world).features;
// var results = {};
// data.forEach(function (d, i) {
//   if (results[d.countryEnglishName]) {
//     results[d.countryEnglishName] += d.confirmedCount;
//   } else {
//     results[d.countryEnglishName] = d.confirmedCount;
//   }
// });
// console.log(world.map((item) => item.id));
var results = world.map((item) => item.id);
// console.log(new Date(1584271456374));

fs.writeFile('world_country_ids.json', JSON.stringify(results), function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('done');
  }
});
