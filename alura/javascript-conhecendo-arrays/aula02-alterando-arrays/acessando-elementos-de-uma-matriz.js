// Podemos criar uma lista de duas dimensões (ou matriz) com o seguinte código:
const funcionarios = [
    ['Ana', 'Juliana', 'Leonardo'],
    [30, 35, 28]
];

// Com base nessa matriz, qual código podemos utilizar para imprimir a frase 'Leonardo tem 28 anos'?
console.log(`
${funcionarios[0][2]} tem ${funcionarios[1][2]} anos    
`);