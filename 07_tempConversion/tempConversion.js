const ftoc = function(temp) {
  temp = (temp - 32) / 1.8;
  return Number(temp.toFixed(1));
};

const ctof = function(temp) {
  temp = temp * 1.8 + 32;
  return Number(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
