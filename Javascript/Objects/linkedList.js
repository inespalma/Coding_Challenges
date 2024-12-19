// Linked List
class LinkedList {
  first;
  constructor(firstElement) {
    this.first = firstElement;
  }

  get first() {
    return this.first;
  }

  insertAtStart(element) {
    element.next = this.first;
    this.first = element;
  }
}

class ListElement {
  data;
  next;

  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  get data() {
    return this.data;
  }

  get next() {
    return this.next;
  }

  get isLast() {
    return !this.next;
  }

  set next(element) {
    this.next = element;
  }
}

const list = new LinkedList(new ListElement(1));
list.insertAtStart(new ListElement(2));

console.log("Current list:", list);
console.log("First item in the list:", list.first.data);
console.log("Second item in the list:", list.first.next.data);

// isLast
let current = list.first;
while (current) {
  console.log(`Is the element ${current.data} the last one? ${current.isLast}`);
  current = current.next;
}
