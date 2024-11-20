//<--- Largest positive value present in the array --->

// <-----------Using a LOOP---------------->

let array = [4, 1, 4, 5];
let max = -Infinity;

for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}

console.log(max);
// Output: 5

// <-----------Using a LOOP / for-of---------------->

let arrays = [4, 1, 4, 5];
let maxi = -Infinity;

for (let value of arrays) {
    if (value > maxi) {
        maxi = value;
    }
}

console.log(maxi);
// Output: 5

// <-----------Using Javascript Methods---------------->

let arrayT = [4, 1, 4, 5];
let maxN = Math.max(...arrayT);

console.log(maxN);
// Output: 5
