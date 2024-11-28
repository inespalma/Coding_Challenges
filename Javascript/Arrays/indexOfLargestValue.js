//<--- Index of the first occurrence of the largest value present in the array. --->

// <-----------Using a LOOP---------------->

let array = [4, 5, 4, 5]
let maxIndex = 0;
let maxValor = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > maxValor) {
        maxValor = array[i];
        maxIndex = i;
    }
}

console.log(maxIndex);
//Output: 1 (Number 5).


// <-----------Using Javascript Methods---------------->

let arrays = [4, 1, 4, 5];

// Step 1: Find the maximum value
let maxValue = Math.max(...arrays);
// Step 2: Get the index of the first occurrence of the maximum value
let index = arrays.indexOf(maxValue);

console.log(index);
//Output: 3 (Number 5)
