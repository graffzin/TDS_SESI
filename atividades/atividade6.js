/* 

crie um fluxo if/else para classificar o desempenho de um aluno

nota >=7 aprovado
nota entre 5 e 6.9 recuperacao
nota <5 reprovado

*/

var notaAluno = 4;

if (notaAluno >= 7)
{
    console.log("Aluno aprovado");
}

else if (notaAluno <= 6.9 && notaAluno >= 5)
{
    console.log("Aluno de recuperacao");
}

else 
{
    console.log("Reprovado")
}