//<--- Pythagorean Theorem --->

function teoremaDePitagoras(c1, c2) {

    let h = Number;

    // Calculate c1² + c2²
    h = c1 ** 2 + c2 ** 2;
    let hypotenuse = Math.sqrt(h);
    return hypotenuse;
}

let result = teoremaDePitagoras(3, 4);
console.log(result);
//Output: 5;