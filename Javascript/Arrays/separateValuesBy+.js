//<--- Separate all the values of the array by '+'--->

// <-----------Using a LOOP---------------->

let array = [4, 1, 4, 5];
let equacao = "";
let soma = 0;

for (let i = 0; i < array.length; i++) {
    equacao += array[i];
    soma += array[i];
    if (i < array.length - 1) {
        equacao += " + ";
    }
}

equacao += " = " + soma;
console.log(equacao);
// Output: 4 + 1 + 4 + 5 = 14;


// <-----------Using Javascript Methods---------------->

let arrays = [1, 2, 3, 4, 5];
let result = arrays.join('+');

result += " = " + soma;

console.log(result);
// Output: 1+2+3+4+5 = 14