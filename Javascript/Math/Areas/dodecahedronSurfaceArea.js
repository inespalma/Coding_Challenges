function dodecahedronSurfaceArea(a) {
  if (a < 0) {
    return "Please enter a positive value.";
  }

  // Area = 3 * √(25 + 10√5) * (edge²)
  const factor = Math.sqrt(25 + 10 * Math.sqrt(5));
  const area = 3 * factor * Math.pow(a, 2);

  return Math.round(area);
}

console.log("Surface area of the dodecahedron:", dodecahedronSurfaceArea(2));
