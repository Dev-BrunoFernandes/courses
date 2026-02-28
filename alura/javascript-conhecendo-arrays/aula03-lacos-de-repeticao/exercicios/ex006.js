/*
    Crie um programa que calcule a média dos números presentes em um array
    utilizando um loop for.
*/
const numeros = [100, 50];
let soma = 0;

for (let numero of numeros) {
    soma += numero;
};

let media = soma / numeros.length;

console.log(media);