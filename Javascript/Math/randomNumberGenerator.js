// Function to generate a random number between min and max (inclusive)
function getRandomBetween(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

console.log(getRandomBetween(1, 20));
