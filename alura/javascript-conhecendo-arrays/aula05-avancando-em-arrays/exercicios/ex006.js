/*
    Crie uma função que receba um array de números e retorne a soma de todos os elementos.
*/
function somaElementos(arr) {
    return arr.reduce((acc, numero) => acc + numero, 0)
}

const numeros = [1, 2, 3, 4, 5, 6, 7],
      somaDosNumeros = somaElementos(numeros);

console.log(somaDosNumeros);