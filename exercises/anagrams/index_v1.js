// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let charMapA = buildCharMap(stringA);
  let charMapB = buildCharMap(stringB);

  if (Object.keys(charMapB).length !== Object.keys(charMapA).length ) {
    return false;
  }

  for (let key in charMapA) {
    if ( charMapA[key] !== charMapB[key]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  let charMap = {};
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

anagrams("One One!__!", "noenoe");
anagrams("One One!__!", "aoeaoe");
//console.log(result);

module.exports = anagrams;
