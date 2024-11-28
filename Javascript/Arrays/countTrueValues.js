// Function that returns true values
function contaVelasAcesas(velas) {
    let velasAcesas = 0;
    for (i = 0; i < velas.length; i++) {
        if (velas[i] === true) {
            velasAcesas++;
        }
    }
    return velasAcesas;
}
console.log(contaVelasAcesas([true, false, false, true, false, true, true]));
// Output: 4
