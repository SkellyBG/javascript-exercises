const fibonacci = function(member) {
  member = Number.parseInt(member);
  if (member <= 0) {
    return "OOPS";
  }
  let prev = 1;
  let cur = 1;
  for (let i = 2; i < member; i++) {
    let temp = prev;
    prev = cur;
    cur = cur + temp;
  }
  return cur;
};

// Do not edit below this line
module.exports = fibonacci;
