function getMostRecentDate(date1, date2) {
  //Format timestamp
  console.log(Date.parse(date1));
  return Date.parse(date1) > Date.parse(date2) ? date1 : date2;
}

console.log(getMostRecentDate("2022-05-01", "2022-04-30"));
// Output: "2022-05-01"
