//<--- Separate all the values of the array by ' '--->

// <-----------Using a LOOP---------------->

let words = ["Olá", "Mundo", "como", "vai", "isso ?"];
let results = "";

for (let i = 0; i < words.length; i++) {
    results += words[i];
    if (i < words.length - 1) {
        results += " ";
    }
}

console.log(results);
// Output: "Olá Mundo como vai isso ?"