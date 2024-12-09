function timeInWords(data) {
  const hoursInWords = [
    "midnight",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty-one",
    "twenty-two",
    "twenty-three",
  ];

  const minutesInWords = [
    "o'clock",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "a quarter",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty-one",
    "twenty-two",
    "twenty-three",
    "twenty-four",
    "twenty-five",
    "twenty-six",
    "twenty-seven",
    "twenty-eight",
    "twenty-nine",
    "half",
    "thirty-one",
    "thirty-two",
    "thirty-three",
    "thirty-four",
    "thirty-five",
    "thirty-six",
    "thirty-seven",
    "thirty-eight",
    "thirty-nine",
    "forty",
    "forty-one",
    "forty-two",
    "forty-three",
    "forty-four",
    "three-quarters",
    "forty-six",
    "forty-seven",
    "forty-eight",
    "forty-nine",
    "fifty",
    "fifty-one",
    "fifty-two",
    "fifty-three",
    "fifty-four",
    "fifty-five",
    "fifty-six",
    "fifty-seven",
    "fifty-eight",
    "fifty-nine",
  ];

  const date = new Date(data);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  return `${hoursInWords[hours]} and ${minutesInWords[minutes]}`;
}

console.log(timeInWords("2021-05-17 09:00"));
// "nine o'clock"
console.log(timeInWords("2021-05-17 09:15"));
// "nine and a quarter"
console.log(timeInWords("2021-05-17 09:30"));
// "nine and half"
console.log(timeInWords("2021-05-17 09:45"));
// "nine and three-quarters"
console.log(timeInWords("2021-05-17 09:05"));
// "nine and five minutes"
