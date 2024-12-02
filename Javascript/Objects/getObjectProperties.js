function getObjectProperties(object) {
  return Object.keys(object);
}

console.log(getObjectProperties({ a: 1, b: 2 }));
// Output: ['a', 'b']

function getObjectValues(object) {
  return Object.values(object);
}

console.log(getObjectValues({ a: 1, b: 2 }));
// Output: [ 1, 2]
