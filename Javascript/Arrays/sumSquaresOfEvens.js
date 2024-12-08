//This function filters out odd numbers, squares the even numbers, and then sums them.

function sumSquaresOfEvens(strings) {
  return (
    strings
      .filter((ele) => ele % 2 === 0)
      //[2, 4]
      .map((ele) => Math.pow(ele, 2))
      //[4, 16]
      .reduce((a, b) => a + b)
    //4 + 16 = 20
  );
}

console.log(sumSquaresOfEvens([1, 2, 3, 4, 5]));
//20
