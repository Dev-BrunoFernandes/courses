/*
    Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
*/
function filtraArray(arr) {
    return arr.filter(numero => numero % 3 === 0 && numero > 5)
}

const array = [10, 20, 30, 40, 50, 60],
      numerosFiltrados = filtraArray(array);

console.log(numerosFiltrados);