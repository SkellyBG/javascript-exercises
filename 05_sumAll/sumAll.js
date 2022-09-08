const sumAll = function(start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
    return 'ERROR';
  }
  let res = (start + end) * (Math.abs(end - start) + 1) / 2;
  return res;
};

// Do not edit below this line
module.exports = sumAll;
