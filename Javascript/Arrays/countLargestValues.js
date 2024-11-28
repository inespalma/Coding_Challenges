//<---  Function to see in a Array how many times the biggest value appears --->

// <-----------Using a LOOP---------------->

function contarVelasMaisAltas(velas) {
    let max = -Infinity;
    let count = 0;

    for (let i = 0; i < velas.length; i++) {
        if (velas[i] > max) {
            max = velas[i];
            count = 1;
        } else if (velas[i] === max) {
            count++;
        }
    }
    return { maxValue: max, count: count };
}

console.log(contarVelasMaisAltas([1, 2, 8, 2, 5, 8]));
//Output: { maxValue: 8, count: 2 };

const result = contarVelasMaisAltas([1, 2, 8, 2, 5, 8]);
console.log(`Highest value: ${result.maxValue}, Count: ${result.count}`);
// Output: Highest value: 8, Count: 2

// <-----------Using a LOOP / for-of---------------->

function contarAsVelasMaisAltas(velas) {
    let max = -Infinity;
    let count = 0;

    for (let vela of velas) {
        if (vela > max) {
            max = vela;
            count = 1;
        } else if (vela === max) {
            count++;
        }
    }
    return { maxValue: max, count: count };
}

console.log(contarAsVelasMaisAltas([1, 2, 8, 2, 5, 8]));
// Output: 2


// <-----------Using Javascript Methods---------------->

function contarAVelasMaisAltas(velas) {
    const max = Math.max(...velas);

    // Count how many times the maximum value appears using filter
    const count = velas.filter(vela => vela === max).length;

    return count;
}

console.log(contarAVelasMaisAltas([1, 2, 8, 2, 5, 8]));
// Output: 2
