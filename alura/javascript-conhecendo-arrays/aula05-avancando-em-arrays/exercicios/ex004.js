/*
    Escreva uma função que receba um array de números
    e retorne um array contendo apenas os números pares.
*/
function arrayDePares(arr) {
    return arr.filter(numero => numero % 2 === 0);
}

const numeros = [1, 2, 3, 4, 5, 6, 7],
      listaNumerosPares = arrayDePares(numeros);

console.log(listaNumerosPares);