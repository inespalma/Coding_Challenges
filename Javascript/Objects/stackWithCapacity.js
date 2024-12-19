class Stack {
  #items = [];
  #capacity;

  constructor(capacity = Infinity) {
    if (typeof capacity !== "number" || capacity === undefined) {
      return "Stack is empty!";
    }
    this.#capacity = capacity;
  }

  add(element) {
    if (this.#items.length >= this.#capacity) {
      return "Stack is full!";
    }
    this.#items.push(element);
  }

  remove() {
    if (this.#items.length === 0) {
      return "Stack is empty!";
    }
    return this.#items.pop();
  }

  getValue() {
    if (this.#items.length === 0) {
      return "Stack is empty!";
    }
    return this.#items[this.#items.length - 1];
  }
}

const stack = new Stack(5);

console.log(stack.add(1));
console.log(stack.add(2));
console.log(stack.add(3));
console.log(stack.add(4));
console.log(stack.add(5));

console.log(stack.getValue());

console.log(stack.add(6));
console.log(stack.add(7));

console.log(stack.remove());
console.log(stack.remove());
console.log(stack.remove());
console.log(stack.remove());
console.log(stack.remove());

console.log(stack.getValue());
console.log(stack.remove());
console.log(stack.getValue());
