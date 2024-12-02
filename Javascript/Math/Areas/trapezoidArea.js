// Calculates the area of a trapezoid

function calculateTrapezoidArea(largerBase, smallerBase, height) {
  return ((largerBase + smallerBase) * height) / 2;
}

console.log(calculateTrapezoidArea(5, 3, 4));
