/*
    Crie uma função que receba uma array de números inteiros
    e retorne a soma dos elementos.
*/
const numeros = [10, 20, 50, 100, 30, 60, 30];
let soma = 0;

function somaDeElementos(arr) {
    for (let numero of arr) {
        soma += numero;
    }

    return soma
}

console.log(somaDeElementos(numeros));