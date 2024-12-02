function coneSurfaceArea(radius, height) {
  let slantHeight = Math.sqrt(radius ** 2 + height ** 2);
  let totalArea = Math.PI * radius * (radius + slantHeight);
  return totalArea;
}

console.log(coneSurfaceArea(2, 6));
