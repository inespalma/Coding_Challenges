// Function that given a base returns the area of a triangle

const TRIANGLE_HEIGHT = 10;
let triangleArea;

function calculateTriangleArea(base) {
  triangleArea = (base * TRIANGLE_HEIGHT) / 2;
  return triangleArea;
}

console.log(calculateTriangleArea(5));
