//<---String Concatenation--->

let a = "Olá";
let b = "Mundo";

// Using the concat() method
let c = a.concat(" ", b);

// Using template literals
let d = `${a} ${b}`;

// Using the + operator
let e = "Olá" + " Mundo";

// Using the + operator with line breaks
let f = "Olá" + "\n" + " Mundo";

console.log(c);
console.log(d);
console.log(e);
console.log(f);

//Output: Olá Mundo
