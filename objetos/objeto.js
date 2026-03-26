const aluno = {
    nome: "Graff",
    idade: 16,
    curso: "Desenvolvimento de Sistemas"
}

/* pode estar em uma linha só todas as informacoes  */

console.log(aluno);
console.log(aluno.nome); // recomendado
console.log(aluno["nome"]); // nao recomendado

aluno.matricula = "2026A"; // adicionar
aluno.idade = 18; // alterar

delete aluno.curso // remover

console.log(aluno);