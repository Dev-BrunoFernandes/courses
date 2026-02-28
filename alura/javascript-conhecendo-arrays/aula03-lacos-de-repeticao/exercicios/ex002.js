// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
const elementos = ['elemento0', 'elemento1', 'elemento2', 'elemento3'];

function exibeIndiceEElemento(arr) {
    for (let i = 0; i < elementos.length; i++) {
        console.log(`
        Índice: ${i}, elemento: "${arr[i]}"
        `);
    }
}

exibeIndiceEElemento(elementos);