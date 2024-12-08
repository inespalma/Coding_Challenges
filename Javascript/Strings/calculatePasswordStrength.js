function calculatePasswordStrength(string) {
  let score = 0;

  // If the string is empty, ask for a valid password
  if (string === "") {
    return "Please enter a valid password.";
  }

  // Password length of 8 or more
  if (string.length >= 8) {
    score += 1;
  }

  // If the string contains a Number
  if (/\d/.test(string)) {
    score += 1;
  }

  // If the string contains an Uppercase letter
  if (/[A-Z]/.test(string)) {
    score += 1;
  }

  // Contains a Character
  if (/[!@#$%^&*(),.?":{}|<>]/.test(string)) {
    score += 1;
  }

  return score;
}

console.log(calculatePasswordStrength(""));
// "Please enter a valid password."

console.log(calculatePasswordStrength("123456"));
// length -> 0 , Number -> 1, Uppercase -> 0, Special Char -> 0 --> Output: 1

console.log(calculatePasswordStrength("12345678"));
// length -> 1 , Number -> 1, Uppercase -> 0, Special Char -> 0 --> Output: 2

console.log(calculatePasswordStrength("12!345678"));
// length -> 1 , Number -> 1, Uppercase -> 0, Special Char -> 1 --> Output: 3

console.log(calculatePasswordStrength("12!34567AA8"));
// length -> 1 , Number -> 1, Uppercase -> 1, Special Char -> 1 --> Output: 4
