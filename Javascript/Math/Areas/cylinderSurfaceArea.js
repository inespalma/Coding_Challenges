function cylinderSurfaceArea(radius, height) {
  let cylinderArea = 2 * Math.PI * radius ** 2 + 2 * Math.PI * radius * height;
  return cylinderArea;
}

console.log(cylinderSurfaceArea(5, 10));
