//Using Spread Operator
function getMostRecentDates(...dates) {
  // ...dates - [ '2022-05-01', '2022-04-30', '2022-06-15', '2021-12-31' ]
  return dates.reduce((mostRecent, currentDate) =>
    Date.parse(currentDate) > Date.parse(mostRecent) ? currentDate : mostRecent
  );
}

console.log(
  getMostRecentDates("2022-05-01", "2022-04-30", "2022-06-15", "2021-12-31")
);
// Output: "2022-06-15"
