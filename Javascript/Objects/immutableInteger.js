class Inteiro {
  #valor;
  constructor(valor) {
    if (typeof valor === "number") {
      this.#valor = Math.trunc(valor);
    } else {
      this.#valor = 0;
    }
  }

  get valor() {
    return this.#valor;
  }
}
console.log(new Inteiro(42).valor);
console.log(new Inteiro(42.78).valor);
console.log(new Inteiro("Hello").valor);
