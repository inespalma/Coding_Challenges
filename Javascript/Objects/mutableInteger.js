class Integer {
  constructor(value) {
    if (typeof value === "number" && !isNaN(value)) {
      this._value = Math.trunc(value);
    } else {
      this._value = 0;
    }
  }

  // Getter: Access the value
  get value() {
    return this._value;
  }

  // Setter: Modify the value
  set value(newValue) {
    if (typeof newValue === "number" && !isNaN(newValue)) {
      this._value = Math.trunc(newValue);
    }
  }
}

const num = new Integer(42.9);
console.log(num.value);
// Output: 42

num.value = 55.99;
// Modifying the value
console.log(num.value);
// Output: 55
