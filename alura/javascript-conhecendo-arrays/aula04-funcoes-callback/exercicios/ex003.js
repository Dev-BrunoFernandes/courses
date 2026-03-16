/*
    Você recebeu um array numeros contendo valores numéricos.
    Crie um programa que verifique se um número específico está presente nesse array.
    Se estiver, o programa deve retornar a posição (índice) desse número.
    Caso contrário, se o número não estiver presente, o programa deve retornar "-1".
*/

const numeros = [1, 2, 3, 4];

function exibeNumero(num) {
    if (numeros.includes(num)) {
        const indice = numeros.indexOf(num);

        console.log(`O número: ${num}, está no índice: ${indice}`);
    } else {
        console.log(numeros.indexOf(num));
    }
}

exibeNumero(5)