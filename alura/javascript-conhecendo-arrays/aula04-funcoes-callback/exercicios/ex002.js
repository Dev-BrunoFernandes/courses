/*
    Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros:
    um array e uma função de callback que executa alguma operação matemática.
    Essa função deve iterar por cada elemento do array e
    aplicar a função de callback em cada um dos elementos, 
    imprimindo o resultado da operação no console.
*/
function executaOperacaoEmArray(array, funcaoCallback) {
    return array.map(funcaoCallback);
}

function dobraNumero(num) {
    return num * 2;
}

const listaNumeros = [1, 2, 3],
      listaNumerosDobrados = executaOperacaoEmArray(listaNumeros, dobraNumero);

console.log(listaNumerosDobrados);