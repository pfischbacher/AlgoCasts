// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const result = str.match(/[aeiou]/gi);

  return result ? result.length : 0;
}

module.exports = vowels;

//function vowels(str) {
//  const vowelsString = 'aeiou';
//  let result = 0;
//  for (let char of str.toLowerCase()) {
//    for (let vowel of vowelsString) {
//      if (vowel === char) {
//        result++;
//      }
//    }
//  }
//  return result;
//}

//function vowels(str) {
//  const checker = ['a','e','i','o','u'];
//  let result = 0;
//  for (let char of str.toLowerCase()) {
//    if (checker.includes(char)) {
//      result++;
//    }
//  }
//  return result;
//}
