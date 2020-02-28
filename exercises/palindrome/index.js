// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


function palindrome(str) {
  return str.split('').every((char, i) => char === str[str.length - i -1]);
}

module.exports = palindrome;

//function palindrome(str) {
//  return str === str.split('').reverse().join('');
//}

//function palindrome(str) {
//  let arr = str.split('');
//  let len = arr.length;
//  let result = true;
//  for (let i = 0; i < Math.floor(len / 2) + 1; i++) {
//    if (arr[i] != arr[len - i - 1] ) {
//      return false;
//    }
//  }
//
//  return result;
//}
