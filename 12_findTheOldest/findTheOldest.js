const findTheOldest = function(array) {
  let oldest = array[0];
  for (const person of array) {
    if (getAge(person) > getAge(oldest)) {
      oldest = person;
    }
  }
  return oldest;
};

const getAge = function(person) {
  let birthYear = person.yearOfBirth;
  let deathYear = person.yearOfDeath;
  if (deathYear === undefined) {
    deathYear = new Date().getFullYear();
  }
  return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
