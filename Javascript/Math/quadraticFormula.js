//<---  Resolvent Formula/Quadratic Formula --->

function formulaResolvente(a, b, c) {
    let delta = (b * b) - (4 * a * c);
    if (delta < 0) {
        return "Sem Solução";
    } else if (delta === 0) {
        let x = -b / (2 * a);
        return "Raiz real é" + `${x}`;
    } else if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [x2, x1];
    }
}

formulaResolvente(3, 40, 50);
//Output: [-11.936734143848029, -1.3967358561519707]

