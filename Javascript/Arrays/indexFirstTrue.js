//<---  // Function that returns the index from the first true --->

function encontraPrimeiraVelaApagada(velas) {
    for (i = 0; i < velas.length; i++) {
        if (velas[i] === true) {
            return i
        }
    }
}

console.log(encontraPrimeiraVelaApagada([false, false, false, true, true]));
// Output: 3