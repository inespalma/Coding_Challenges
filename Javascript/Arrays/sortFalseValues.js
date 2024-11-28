//<---  // Function that sort the array, placing false values first --->

function ordenaVelasApagadasPrimeiro(velas) {
  let sort = velas.sort((a, b) => (a === false) - (b === false));

  return sort;
}

console.log(ordenaVelasApagadasPrimeiro([true, false, false, true, true]));
// Output: [false, false, true, true, true]
