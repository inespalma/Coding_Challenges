//<--- Median --->

// <-----------Using a LOOP---------------->
function median(numbers) {
    // Sort the numbers in ascending order
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);
    const n = sortedNumbers.length;

    // Check if the number of elements is odd or even
    if (n % 2 === 1) {
        // Odd: Return the middle value
        return sortedNumbers[Math.floor(n / 2)];
    } else {
        // Even: Calculate the average of the two middle values
        const mid1 = sortedNumbers[n / 2 - 1];
        const mid2 = sortedNumbers[n / 2];
        return (mid1 + mid2) / 2;
    }
}

const numbers = [3, 1, 4, 1, 5, 9, 2];
console.log("A mediana é:", median(numbers));
//Output: A mediana é: 3

// <-----------Using Javascript Methods---------------->

function medians(numbers) {
    const sorted = numbers.sort((a, b) => a - b);

    // Calculate the index of the middle element
    const mid = Math.floor(sorted.length / 2);

    // If the number of elements is even, return the average of the two central values
    return sorted.length % 2 === 0
        ? (sorted[mid - 1] + sorted[mid]) / 2
        : sorted[mid];
}

console.log(medians([3, 1, 4, 1, 5, 9, 2]));
//Output: 3


