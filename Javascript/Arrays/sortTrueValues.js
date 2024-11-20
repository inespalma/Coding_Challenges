// <---  // Function that sort the array, placing true values first --->

function ordenaVelasAcesasPrimeiro(velas) {
    let sort = velas.sort((a, b) => b - a);

    // Count how many 'true/'false' values are in the sorted array
    let trueCount = velas.filter(vela => vela === true).length;
    let falseCount = velas.filter(vela => vela === false).length;

    console.log(`True values: ${trueCount}`);
    //Output: 3
    console.log(`False values: ${falseCount}`);
    //Output: 2

    return sort;
}

console.log(ordenaVelasAcesasPrimeiro([true, false, false, true, true]));
// Output: [false, false, true, true, true]