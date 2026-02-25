const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

// Remove e adiciona elementos do array.
// O primeiro parâmetro indica o índice de onde partirá a ação.
// O segundo indica a quantidade de elementos a partir do índice.
// O terceiro é o elemento que será adicionado no lugar dos que foram removidos.
listaEstudantes.splice(1, 2, 'Rodrigo');

console.log(listaEstudantes);