function getObjectKeys(object) {
  return Object.keys(object);
}

console.log(getObjectKeys({ a: 1, b: 2 }));
// Output: ['a', 'b']

function getObjectValues(object) {
  return Object.values(object);
}

console.log(getObjectValues({ a: 1, b: 2 }));
// Output: [1, 2]

function getPropertyValue(object, property) {
  return object.hasOwnProperty(property)
    ? object[property]
    : "Property not found.";
}

console.log(getPropertyValue({ name: "John", age: 30 }, "name")); // John
// Output: 'John'
