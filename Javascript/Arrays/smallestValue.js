//<--- Smallest positive value in an array --->

// <-----------Using a LOOP---------------->

let array = [4, 1, -5, 4, 5]
let min = Infinity;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] < min) {
        min = array[i];
    }
}
console.log(min);
//Output: 1

// <-----------Using a LOOP / for-of---------------->

let arrays = [4, 1, -5, 4, 5];
let mins = Infinity;

for (let value of arrays) {
    if (value > 0 && value < mins) {
        mins = value;
    }
}

console.log(mins);
// Output: 1

// <-----------Using Javascript Methods---------------->

let arrayT = [4, 1, -5, 4, 5];
let minPositive = Math.min(...arrayT.filter(value => value > 0));

console.log(minPositive);
// Output: 1
