class WaterBottle {
  #capacity;
  #quantity;
  #isOpen;

  constructor(capacity) {
    this.#capacity = capacity;
    this.#quantity = 0;
    this.#isOpen = false;
  }

  drink() {
    if (this.#isOpen) {
      if (this.#quantity > 0) {
        const amountDrunk = Math.min(this.#quantity, 200);
        this.#quantity -= amountDrunk;
        return `${amountDrunk} ml of water were drunk`;
      } else {
        return "The bottle is empty";
      }
    } else {
      return "The bottle is closed";
    }
  }

  fill(amount) {
    if (this.#isOpen) {
      this.#quantity = Math.min(this.#quantity + amount, this.#capacity);
    } else {
      return "The bottle is closed";
    }
  }

  toggleOpenClose() {
    this.#isOpen = !this.#isOpen;
  }

  get quantity() {
    return this.#quantity;
  }

  get isOpen() {
    return this.#isOpen;
  }

  get capacity() {
    return this.#capacity;
  }
}

const bottle = new WaterBottle(1000);

bottle.toggleOpenClose();
console.log(bottle.isOpen);
// Output: true

bottle.fill(500);
console.log(bottle.quantity);
// Output: 500 (500 ml added to the bottle)

bottle.drink();
console.log(bottle.quantity);
// Output: 300 (200 ml was drunk)

console.log(bottle.drink());
// Output: "The bottle is empty"
