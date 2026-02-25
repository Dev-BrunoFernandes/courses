//Crie uma função que receba dois arrays e os concatene em um único array.
const sala1 = ['João', 'Marta', 'Maria'],
      sala2 = ['Pedro', 'Miguel', 'Catarina'],
      salaFinal = concatenar(sala1, sala2);

function concatenar(arr1, arr2) {
    return arr1.concat(arr2);
};


console.log(salaFinal);