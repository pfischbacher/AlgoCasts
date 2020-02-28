// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let result = 0;
  let sign = 1;

  if (n < 0) {
    n = 0 - n;
    sign = -1;
  }

  while ( n > 0) {
    result *= 10;
    result += n % 10;
    n = (n - (n % 10) ) / 10;
  }

  result *= sign;

  return result;
}

module.exports = reverseInt;

//function reverseInt(n) {
//  return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''));
//}
