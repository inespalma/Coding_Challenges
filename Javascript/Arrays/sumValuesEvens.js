// < --- Sum of all the values EVENS in the array-- ->

function sumValuesEvens(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        // Check if the number is Even
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumValuesEvens(7));   // Output: 12 (2 + 4 + 6)
console.log(sumValuesEvens(10));  // Output: 30 (2 + 4 + 6 + 8 + 10)
console.log(sumValuesEvens(15));  // Output: 56 (2 + 4 + 6 + 8 + 10 + 12 + 14)
