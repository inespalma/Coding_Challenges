function sumSecondaryDiagonal(squareMatrix) {
  let sum = 0;
  const n = squareMatrix.length;
  for (let i = n - 1; i >= 0; i--) {
    sum += squareMatrix[i][n - 1 - i];
  }
  return sum;
}

const matrix = [
  [6, 3, 6],
  [10, 0, 7],
  [2, 3, 5],
];

console.log(sumSecondaryDiagonal(matrix));

// Using reduce
function sumSecondaryDiagonalAlt(matrixs) {
  return matrixs.reduce(
    (sum, row, index) => sum + row[matrixs.length - 1 - index],
    0
  );
}

const matrixs = [
  [6, 3, 6],
  [10, 0, 7],
  [4, 3, 5],
];

console.log(sumSecondaryDiagonalAlt(matrixs));
