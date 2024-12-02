function determineIfAdult(person) {
  if (person.age !== undefined) {
    person.isAdult = person.age >= 18;
  } else {
    person.isAdult = false;
  }
  return person;
}

console.log(determineIfAdult({ age: 18 }));
console.log(determineIfAdult({ age: 17 }));
