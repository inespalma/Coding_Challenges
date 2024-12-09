class Calculator {
  constructor() {
    this.history = [];
    this.add = (num1, num2) => {
      const result = num1 + num2;
      this.recordHistory("add", [num1, num2], result);
      return result;
    };

    this.subtract = (num1, num2) => {
      const result = num1 - num2;
      this.recordHistory("subtract", [num1, num2], result);
      return result;
    };

    this.multiply = (num1, num2) => {
      const result = num1 * num2;
      this.recordHistory("multiply", [num1, num2], result);
      return result;
    };

    this.divide = (num1, num2) => {
      const result = num1 / num2;
      this.recordHistory("divide", [num1, num2], result);
      return result;
    };
  }

  // Retrieve the history of operations
  getHistory(operation) {
    if (operation === undefined) {
      return this.history;
    }
    return this.history.filter((entry) => entry.operation === operation);
  }

  // Record an operation in the history
  recordHistory(operation, values, result) {
    this.history.push({ operation, a: values[0], b: values[1], result });
  }
}

const calc = new Calculator();

// History Before
console.log(calc.getHistory()); // Output: []

console.log(calc.add(5, 3)); // Output: 8
console.log(calc.subtract(10, 4)); // Output: 6
console.log(calc.multiply(6, 7)); // Output: 42
console.log(calc.divide(20, 4)); // Output: 5

console.log(calc.getHistory("add"));
// Output: [{ operation: 'add', a: 5, b: 3, result: 8 }]
console.log(calc.getHistory("multiply"));
// Output: [{ operation: 'multiply', a: 6, b: 7, result: 42 }]

// History After
console.log(calc.getHistory());
// Output: [{ operation: 'add', a: 5, b: 3, result: 8 }, ...]
