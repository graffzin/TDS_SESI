/* 

a) crie uma lista(array) com 10 nomes de alunos

b) escreva um codigo que verifique se o nome "Lucas" esta na lista

c) exiba: "Usuario encontrado no sistema" ou "Usuario nao localizado"

*/

const nomesAlunos = ["Gustavo", "Angelo", "Henrico", "Joao", "Alex", "Zoio", "Felipe", "Pedro", "Saymon", "Kelven"];

console.log("Usuario foi encontrado?",nomesAlunos.includes("Lucas"));


// outro jeito de imprimir abaixo:


if (nomesAlunos.includes("Lucas") == true)
{
    console.log("Usuario encontrado no sistema ");
}

else
{
    console.log("Usuario nao localizado ");
}