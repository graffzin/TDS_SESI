/* 

a) crie uma logica que verifique se um usuario possui acesso a um evento VIP

b) condicao: o usuario deve ter idade superior a 18 && (E) possuir um convite (possui convite = true)

c) exiba uma mensagem de autorizacao baseada no resultado logico

*/

let possuiConvite = true;
var idade = 18;

if (idade >= 18 && possuiConvite == true)
{
    console.log ("Voce tem um convite e idade igual ou superior a 18! Voce esta liberado!")
}

else 
{
    console.log ("Voce nao tem um convite e idade igual ou superior a 18! Voce nao esta liberado!")
}