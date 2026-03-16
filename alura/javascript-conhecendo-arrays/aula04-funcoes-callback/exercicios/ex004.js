/*
    Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
    Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas.
    Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos.
    Exiba no console uma mensagem informando o nome do aluno procurado;
    caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.
*/

const nomesTurmaA = ['João Silva', 'Maria Santos', 'Pedro Almeida'],
      nomesTurmaB = ['Carlos Oliveira', 'Ana Souza', 'Lucas Fernandes'],
      todasAsTurmas = nomesTurmaA.concat(nomesTurmaB),
      alunoProcurado = todasAsTurmas.find(nome => nome === 'Ana Souza');

if (alunoProcurado) {
    console.log(`O(A) aluno(a): ${alunoProcurado} foi encontrado(a)`);
} else {
    console.log(`O(A) aluno(a): não foi encontrado(a)`);
}