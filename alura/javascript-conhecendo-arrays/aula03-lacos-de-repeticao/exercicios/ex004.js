/*
    Crie uma função que receba uma array de números inteiros
    e retorne o menor valor e o maior valor da array,
    no seguinte formato: 'o menor número é X e o maior número é Y'.
*/
const numeros = [1, 2, 3, 10, 4, 5, 3, 0, 1, 9, 500, 4];

function exibeMaiorEMenor(arr) {
    let menor = arr[0],
        maior = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < menor) {
            menor = arr[i];
        } else if (arr[i] > maior) {
            maior = arr[i];
        };
    };

    console.log(`
    O menor número do array é: ${menor} e o maior é: ${maior}    
    `);
};

exibeMaiorEMenor(numeros);