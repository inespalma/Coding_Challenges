//<---  // Function that returns the index from the last true --->

function encontraUltimaVelaAcesa(velas) {
    for (let i = velas.length - 1; i >= 0; i--) {
        if (velas[i] === true) {
            return i
        }
    }
}

console.log(encontraUltimaVelaAcesa([false, false, false, true, true]));
//Output: 4