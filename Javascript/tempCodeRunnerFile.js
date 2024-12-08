function calculatePasswordStrength(string) {
//   let score = 0;

//   // If the string is empty, ask for a valid password
//   if (string === "") {
//     return "Please enter a valid password.";
//   }

//   // Password length of 8 or more
//   if (string.length >= 8) {
//     score += 1;
//   }

//   // If the string contains a Number
//   if (/\d/.test(string)) {
//     score += 1;
//   }

//   // If the string contains an Uppercase letter
//   if (/[A-Z]/.test(string)) {
//     score += 1;
//   }

//   // Contains a Character
//   if (/[!@#$%^&*(),.?":{}|<>]/.test(string)) {
//     score += 1;
//   }

//   return score;
// }