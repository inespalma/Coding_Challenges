function absoluteDifferenceBetweenDiagonals(squareMatrix) {
  let mainDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  for (let i = 0; i < squareMatrix.length; i++) {
    // Main diagonal
    mainDiagonalSum += squareMatrix[i][i];
    // Secondary diagonal
    secondaryDiagonalSum += squareMatrix[i][squareMatrix.length - 1 - i];
  }

  return Math.abs(mainDiagonalSum - secondaryDiagonalSum);
}

console.log(
  absoluteDifferenceBetweenDiagonals([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
//Output: 15 - 17 = 2

function differenceBetweenDiagonals(matrix) {
  let mainDiagonalSum = 0;
  let secondaryDiagonalSum = 0;
  let size = matrix.length;

  for (let i = 0; i < size; i++) {
    mainDiagonalSum += matrix[i][i];
    secondaryDiagonalSum += matrix[i][size - 1 - i];
  }

  return mainDiagonalSum - secondaryDiagonalSum;
}

console.log(
  differenceBetweenDiagonals([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
); // Output: -2
