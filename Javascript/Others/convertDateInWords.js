function convertDateInWords(day, month, year) {
  let days = new Map([
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
    [15, "fifteen"],
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
    [30, "thirty"],
    [31, "thirty-one"],
  ]);

  let months = new Map([
    [1, "January"],
    [2, "February"],
    [3, "March"],
    [4, "April"],
    [5, "May"],
    [6, "June"],
    [7, "July"],
    [8, "August"],
    [9, "September"],
    [10, "October"],
    [11, "November"],
    [12, "December"],
  ]);

  let years = new Map([
    [2000, "two thousand"],
    [2001, "two thousand and one"],
    [2002, "two thousand and two"],
    [2003, "two thousand and three"],
    [2004, "two thousand and four"],
    [2005, "two thousand and five"],
    [2006, "two thousand and six"],
    [2007, "two thousand and seven"],
    [2008, "two thousand and eight"],
    [2009, "two thousand and nine"],
    [2010, "two thousand and ten"],
    [2011, "two thousand and eleven"],
    [2012, "two thousand and twelve"],
    [2013, "two thousand and thirteen"],
    [2014, "two thousand and fourteen"],
    [2015, "two thousand and fifteen"],
    [2016, "two thousand and sixteen"],
    [2017, "two thousand and seventeen"],
    [2018, "two thousand and eighteen"],
    [2019, "two thousand and nineteen"],
    [2020, "two thousand and twenty"],
    [2021, "two thousand and twenty-one"],
    [2022, "two thousand and twenty-two"],
    [2023, "two thousand and twenty-three"],
    [2024, "two thousand and twenty-four"],
    [2025, "two thousand and twenty-five"],
    [2026, "two thousand and twenty-six"],
    [2027, "two thousand and twenty-seven"],
    [2028, "two thousand and twenty-eight"],
    [2029, "two thousand and twenty-nine"],
    [2030, "two thousand and thirty"],
  ]);

  if (day < 1 || day > 31) return "Please enter a day between 1 and 31.";
  if (month < 1 || month > 12) return "Please enter a month between 1 and 12.";
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    if (day > 30) return "Please enter a day between 1 and 30.";
  }

  let leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  if (month === 2) {
    if (leapYear && day > 29) {
      return "Please enter a day between 1 and 29.";
    }
    if (!leapYear && day > 28) {
      return "Please enter a day between 1 and 28.";
    }
  }
  if (year < 2000 || year > 2030)
    return "Please enter a year between 2000 and 2030.";

  return `${days.get(day)} of ${months.get(month)} of ${years.get(year)}`;
}

console.log(convertDateInWords(4, 4, 2022)); // "fourth of April of two thousand and twenty-two"
console.log(convertDateInWords(12, 3, 2003)); // "twelfth of March of two thousand and three"
console.log(convertDateInWords(1, 1, 1990)); // "Please enter a year between 2000 and 2030."
console.log(convertDateInWords(26, 6, 2004)); // "twenty-sixth of June of two thousand and four"
