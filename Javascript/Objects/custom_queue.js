class Queue {
  #items = [];

  add(element) {
    this.#items.push(element);
    console.log(`Added: ${element}`);
  }

  remove() {
    if (this.#items.length === 0) {
      console.log("Queue is empty!");
      return "Queue is empty!";
    }
    const removedElement = this.#items.shift();
    console.log(`Removed: ${removedElement}`);
    return removedElement;
  }

  getElement() {
    if (this.#items.length === 0) {
      console.log("Queue is empty!");
      return "Queue is empty!";
    }
    console.log(`First element: ${this.#items[0]}`);
    return this.#items[0];
  }
}

const queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);

queue.getElement();
queue.remove();
queue.remove();
queue.getElement();
queue.remove();
queue.remove();
