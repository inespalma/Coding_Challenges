function FizzBuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let str;
    if (i % 15 === 0) {
      str = "FizzBuzz";
    } else if (i % 3 === 0) {
      str = "Fizz";
    } else if (i % 5 === 0) {
      str = "Buzz";
    } else {
      str = " ";
    }
    result.push(str);
  }

  return result;
}

console.log(FizzBuzz(20));
console.log(FizzBuzz(15));
// [" ", " ", "Fizz", " ", "Buzz", "Fizz", " ", " ", "Fizz", "Buzz", " ", "Fizz", " ", " ", "FizzBuzz"]
