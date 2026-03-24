const notas = [7, 7, 8, 9],
      novaListaNotas = [...notas, 10];

// Spread Operator
// notaListaNotas.push(10);

console.log(notas);
console.log(novaListaNotas);





const arrayOriginal = [7, 7, 8, 9];

function alteraArray(array) {
    array.push(10);

    console.log(`array do parâmetro é ${array}`);
    console.log(`arrayOriginal é ${arrayOriginal}`);
}

alteraArray(arrayOriginal);