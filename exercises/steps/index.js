// 
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, i = 1) {
  console.log('#'.repeat(i) + ' '.repeat(n - i));
  if ( i < n ) {
    steps(n, i+1);
  }
}

module.exports = steps;

//function steps(n) {
//  for (let i = 0; i < n; i++) {
//    console.log('#'.repeat( i + 1) + ' '.repeat(n - i - 1));
//  }
//}

//function steps(n) {
//  for (let row = 0; row < n; row++) {
//    let cols = [];
//    for (let col = 0; col < n; col++) {
//      cols[col] = col <= row ? '#' : ' ';
//    }
//    console.log(cols.join(''));
//  }
//}
