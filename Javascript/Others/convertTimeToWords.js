function convertTimeToWords(hours, minutes) {
  const hoursWords = new Map([
    [0, "midnight"],
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
    [9, "nine"],
    [10, "ten"],
    [11, "eleven"],
    [12, "noon"],
    [13, "one"],
    [14, "two"],
    [15, "three"],
    [16, "four"],
    [17, "five"],
    [18, "six"],
    [19, "seven"],
    [20, "eight"],
    [21, "nine"],
    [22, "ten"],
    [23, "eleven"],
    [24, "midnight"],
  ]);

  const minutesWords = new Map([
    [0, "zero"],
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
    [9, "nine"],
    [10, "ten"],
    [11, "eleven"],
    [12, "twelve"],
    [13, "thirteen"],
    [14, "fourteen"],
    [15, "quarter"],
    [16, "sixteen"],
    [17, "seventeen"],
    [18, "eighteen"],
    [19, "nineteen"],
    [20, "twenty"],
    [21, "twenty-one"],
    [22, "twenty-two"],
    [23, "twenty-three"],
    [24, "twenty-four"],
    [25, "twenty-five"],
    [26, "twenty-six"],
    [27, "twenty-seven"],
    [28, "twenty-eight"],
    [29, "twenty-nine"],
    [30, "half"],
    [31, "twenty-nine"],
    [32, "twenty-eight"],
    [33, "twenty-seven"],
    [34, "twenty-six"],
    [35, "twenty-five"],
    [36, "twenty-four"],
    [37, "twenty-three"],
    [38, "twenty-two"],
    [39, "twenty-one"],
    [40, "twenty"],
    [41, "nineteen"],
    [42, "eighteen"],
    [43, "seventeen"],
    [44, "sixteen"],
    [45, "quarter"],
    [46, "fourteen"],
    [47, "thirteen"],
    [48, "twelve"],
    [49, "eleven"],
    [50, "ten"],
    [51, "nine"],
    [52, "eight"],
    [53, "seven"],
    [54, "six"],
    [55, "five"],
    [56, "four"],
    [57, "three"],
    [58, "two"],
    [59, "one"],
  ]);

  if (minutes === 0) {
    return `${hoursWords.get(hours)} o'clock`;
  }
  if (minutes <= 30) {
    return `${hoursWords.get(hours)} and ${minutesWords.get(minutes)}`;
  }
  if (minutes > 30 && hours === 11) {
    return `${minutesWords.get(minutes)} to noon`;
  }
  if (minutes > 30 && hours === 23) {
    return `${minutesWords.get(minutes)} to midnight`;
  }
  if (minutes > 30) {
    return `${minutesWords.get(minutes)} to ${hoursWords.get(hours + 1)}`;
  }
}

console.log(convertTimeToWords(10, 30)); // "ten and half"
console.log(convertTimeToWords(2, 5)); // "two and five"
console.log(convertTimeToWords(4, 45)); // "quarter to five"
console.log(convertTimeToWords(12, 0)); // "noon o'clock"
console.log(convertTimeToWords(11, 50)); // "ten to noon"
console.log(convertTimeToWords(14, 23)); // "two and twenty-three"
