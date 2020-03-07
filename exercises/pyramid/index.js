// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, i = 0) {
  //let length = 2 * n - 1; // 1 + (n - 1) * 2;
  let side = ' '.repeat(n - 1 - i);
  let mid = '#'. repeat(1 + 2 * i);
  console.log(side + mid + side);
  if (i < n - 1) {
    pyramid(n, i + 1);
  }
}

module.exports = pyramid;

//function pyramid(n) {
//  //let length = 2 * n - 1; // 1 + (n - 1) * 2;
//  for (let i = 0; i < n; i++) {
//    let side = ' '.repeat(n - 1 - i);
//    let mid = '#'. repeat(1 + 2 * i);
//    console.log(side + mid + side);
//  }
//}
