//<--- Check if the number is Even or Odd --->

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOrOdd(4));  // Output: "Even"
console.log(checkEvenOrOdd(7));  // Output: "Odd"
console.log(checkEvenOrOdd(0));  // Output: "Even" (0 is considered even) 