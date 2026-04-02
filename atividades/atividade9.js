/* 

a) desenvolva uma funcao que receba nome e horaAtual

b) retorne "bom dia", "boa tarde" ou "boa noite" concatenando a nome, baseando-se em faixas de horario (00-11, 12-17, 18-23)

*/

function saudacao(nome, horaAtual)
{
    if (horaAtual <= 11)
    {
        console.log(`Bom dia ${nome}!`);
    }

    else if (horaAtual <= 17)
    {
        console.log(`Boa tarde ${nome}!`);
    }
    
    else
    { 
        console.log(`Boa noite ${nome}!`);
    }
}

saudacao("Gustavo", 13);