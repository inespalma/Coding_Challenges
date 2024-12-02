// Function to calculate the perimeter of a trapezoid

function isoscelesTrapezoidPerimeter(longerBase, shorterBase, height) {
  let divided = (longerBase - shorterBase) / 2;
  let side = Math.sqrt(height ** 2 + divided ** 2);
  return side * 2 + longerBase + shorterBase;
}

console.log(isoscelesTrapezoidPerimeter(5, 3, 4));
