function getOldestDate(dates) {
  // Convert date to timestamp with .getTime()
  let oldest = new Date(
    Math.min(...dates.map((date) => new Date(date).getTime()))
  );

  // Return the date in YYYY-MM-DD format
  return oldest.toISOString().split("T")[0]; // This gives the date without the time part
}

console.log(getOldestDate(["2022-05-01", "2022-04-30", "2021-12-31"]));
// Output: "2021-12-31"
