function sumMainDiagonal(squareMatrix) {
  let sum = 0;
  for (let i = 0; i < squareMatrix.length; i++) {
    // console.log(squareMatrix[i][i]);
    sum += squareMatrix[i][i];
  }
  return sum;
}

const matrix = [
  [6, 3, 6],
  [10, 0, 7],
  [8, 3, 5],
];

console.log(sumMainDiagonal(matrix));
// Output: 6 + 0 + 5 = 11

// Using reduce
function sumMainDiagonalAlt(squareMatrix) {
  return squareMatrix.reduce((sum, row, index) => sum + row[index], 0);
}

const matrixs = [
  [6, 3, 6],
  [10, 0, 7],
  [8, 3, 2],
];

console.log(sumMainDiagonalAlt(matrixs));
// Output: 6 + 0 + 2 = 8
