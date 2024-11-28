// <---  // Function that sort the array, placing true values first --->

function ordenaVelasAcesasPrimeiro(velas) {
  let sort = velas.sort((a, b) => (b === true ? 1 : -1));

  return sort;
}

console.log(ordenaVelasAcesasPrimeiro([true, false, false, true, true]));
// Output: [true, true, true, false, false]
