function calculateMode(array) {
  const frequencies = new Map();
  let maxFrequency = 0;
  let modes = [];

  for (const num of array) {
    const count = (frequencies.get(num) || 0) + 1;
    frequencies.set(num, count);

    if (count > maxFrequency) {
      maxFrequency = count;
      modes = [num];
    } else if (count === maxFrequency) {
      modes.push(num);
    }
  }

  // Return the first mode found
  return modes[0];
}

console.log(calculateMode([1, 2, 3, 4, 5])); // Output: 1
console.log(calculateMode([1, 2, 3, 4, 4, 5])); // Output: 4
console.log(
  calculateMode([
    173, 77, 845, 865, 971, 470, 219, 71, 95, 734, 676, 703, 205, 654, 91, 318,
    17, 333, 241, 455, 50, 824, 731, 633, 217, 558, 523, 486, 314, 618, 572,
    957, 926, 375, 379, 328, 786, 794, 231, 84, 18, 573, 647, 305, 413, 643,
    597, 758, 886, 868, 699, 374, 69, 346, 54, 303, 507, 941, 156, 147, 840,
    327, 785, 408, 463, 382, 804, 869, 501, 293, 286, 989, 156, 388, 616, 160,
    471, 880, 491, 556, 424, 565, 721, 334, 82, 697, 793, 106, 885, 884, 309,
    538, 845, 910, 158, 764, 644,
  ])
); // Output: 156
