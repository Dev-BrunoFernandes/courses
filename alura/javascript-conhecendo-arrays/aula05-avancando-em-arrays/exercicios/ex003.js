/*
    Considere duas listas de cores. Crie um programa que una essas duas listas,
    removendo cores duplicadas e exiba a lista final.
*/
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'],
      coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const coresListaUnica = [...new Set([...coresLista1, ...coresLista2])];

console.log(coresListaUnica);