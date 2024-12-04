function getDayOfWeek(data, lingua) {
  const daysInPortuguese = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const daysInEnglish = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Ensure data is a Date object
  if (!(data instanceof Date) || isNaN(data.getTime())) {
    return "Invalid Date";
  }

  if (lingua === "pt") {
    return daysInPortuguese[data.getDay()];
  } else if (lingua === "en") {
    return daysInEnglish[data.getDay()];
  } else {
    return "Unsupported language. Use 'pt' or 'en'.";
  }
}

console.log(getDayOfWeek(new Date("2024-12-04"), "pt")); // Quarta-feira
console.log(getDayOfWeek(new Date("2024-12-04"), "en")); // Wednesday
console.log(getDayOfWeek("Invalid Date", "pt")); // Invalid date
console.log(getDayOfWeek(new Date(), "fr")); // Unsupported language. Use 'pt' or 'en'.
