// < --- Sum of all the values in the array-- ->

// <-----------Using a LOOP---------------->

function somatorio(arr) {
  let soma = 0;

  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}

console.log(somatorio([1, 2, 3, 4, 5]));
// Output: 15

// <-----------Using a LOOP / for-of---------------->

function somatorios(arr) {
  let soma = 0;

  for (let num of arr) {
    soma += num;
  }
  return soma;
}

console.log(somatorios([1, 2, 3, 4, 5]));
// Output: 15

// <-----------Using Javascript Methods---------------->

function somatorioTotal(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

console.log(somatorioTotal([1, 2, 3, 4, 5]));
// Output: 15
