const alunos = ['João', 'Juliana', 'Caio', 'Ana'],
      medias = [10, 8, 7.5, 9],
      lista = [alunos, medias];

function exibeNomeENota(aluno) {
    const [alunos, medias] = lista;

    if (alunos.includes(aluno)) {
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaAluno}.`);
    } else {
        console.log('Estudante não existe na lista.');
    }
};

exibeNomeENota('Juliana');
exibeNomeENota('Vini');




let j = 8;
console.log(++j); // Saída: 9 (j foi incrementado antes de ser usado)
console.log(j);   // Saída: 9 (j já foi incrementado)