/*
    Crie um array de números chamado valores.
    Depois,escreva um programa que some todos os elementos deste array
    utilizando o método reduce.
*/
const valores = [1, 2, 3, 4, 5, 6, 7],
      somaValores = valores.reduce((acc, valor) => acc + valor, 0);

console.log(`Soma dos valores: ${somaValores}`);