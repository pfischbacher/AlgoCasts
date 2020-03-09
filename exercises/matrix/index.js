// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(Array(n));
  }
  const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let dirIndex = 0;
  let col = 0;
  let row = 0;
  let count = 0;
  let turnCounter = n;
  let turns = 1;

  for (let i = 1; i <= n * n; i++) {
    result[row][col] = i;
    if (count === turnCounter - 1 ) {
      count = 0;
      dirIndex = dirIndex < 3 ? dirIndex + 1 : 0;
      // reduce turnCounter every 2nd turn
      if (turns === 1) {
        turnCounter--;
        turns = 0;
      } else {
        turns++;
      }
    } else {
      count++;
    }

    row += dir[dirIndex][0];
    col += dir[dirIndex][1];
  }
  return result;
}

module.exports = matrix;
