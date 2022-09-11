const caesar = function(string, num) {
  let res = "";
  for (let i = 0; i < string.length; i++) {
    let c = string.charAt(i);
    if (c.match(/[a-zA-Z]/)) {
      res += shift(c, num);
    } else {
      res += c;
    }
  }
  return res;
};

const shift = function(letter, num) {
  let codePoint = letter.codePointAt(0);
  if (letter.match(/[a-z]/)) {
    codePoint += (num % 26);
    if (codePoint < "a".codePointAt(0)) {
      codePoint += 26;
    }
    if (codePoint > "z".codePointAt(0)) {
      codePoint -= 26;
    }
  } else {
    codePoint += (num % 26);
    if (codePoint < "A".codePointAt(0)) {
      codePoint += 26;
    }
    if (codePoint > "Z".codePointAt(0)) {
      codePoint -= 26;
    }
  }
  return String.fromCodePoint(codePoint);
}

// Do not edit below this line
module.exports = caesar;
