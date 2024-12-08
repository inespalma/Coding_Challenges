function arrayDeNAZero(n) {
    if (n <= 0 || typeof n !== "number") {
        return "Por favor insira um número superior a 0."
    }
    if (n === 1) {
        return [1, 0]
    }
    return [n, ...arrayDeNAZero(n - 1)]
}