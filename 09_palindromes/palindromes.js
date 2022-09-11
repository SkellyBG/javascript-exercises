const palindromes = function(string) {
  let formatted = "";

  //parse, removing all non-alphabet character and add the lowercase version to formatted string
  for (let i = 0; i < string.length; i++) {
    let c = string.charAt(i);
    if (c.match(/[a-zA-Z]/)) {
      formatted += c.toLowerCase();
    }
  }

  let left = 0;
  let right = formatted.length - 1;
  while (left < right) {
    if (formatted.charAt(left) !== formatted.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
