function getObjectProperty(object, property) {
  return object.hasOwnProperty(property)
    ? object[property]
    : "Property not found.";
}

console.log(getObjectProperty({ name: "John", age: 30 }, "name")); // John
