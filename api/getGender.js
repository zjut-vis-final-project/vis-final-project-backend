var getGender = function (req, res) {
  let data = {
    age: [
      '0-10岁',
      '10-20岁',
      '20-30岁',
      '30-40岁',
      '40-50岁',
      '50-60岁',
      '60-70岁',
      '70-80岁',
      '80-90岁',
      '90-100岁',
    ],
    data: {
      男: [
        0.028748341441839895,
        0.03582485625829279,
        0.1468376824413976,
        0.23706324635117204,
        0.2410437859354268,
        0.16585581601061478,
        0.0946483856700575,
        0.04157452454666077,
        0.007518796992481203,
        0.0008845643520566122,
      ],
      女: [
        0.02308078273958856,
        0.02609131961866533,
        0.11339688911189162,
        0.21274460612142498,
        0.2488710486703462,
        0.1996989463120923,
        0.11991971901655796,
        0.040642247867536375,
        0.015052684395383844,
        0.0005017561465127947,
      ],
    },
  };
  res.send(data);
};
module.exports = getGender;
