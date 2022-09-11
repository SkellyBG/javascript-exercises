const getTheTitles = function(array) {
  let res = [];
  for (const book of array) {
    res.push(book.title);
  }
  return res;
};

// Do not edit below this line
module.exports = getTheTitles;
