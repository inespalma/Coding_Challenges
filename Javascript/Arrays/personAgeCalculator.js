function calculatePersonAges(people) {
  return people.map((person) => {
    const birthDate = new Date(person.birthday);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    console.log(age);
    //Output: 34, 39, 24

    const birthdayThisYear = new Date(
      today.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate()
    );

    if (today < birthdayThisYear) {
      age--;
    }

    return { ...person, age };
  });
}

const people = [
  { name: "Alice", birthday: "1990-05-15" },
  { name: "Bob", birthday: "1985-08-25" },
  { name: "Charlie", birthday: "2000-12-10" },
];

console.log(calculatePersonAges(people));
// { name: 'Alice', birthday: '1990-05-15', age: 34 }...
