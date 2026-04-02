/* 

a) crie uma funcao que receba dois parametros: o valor em reais e a taxa de cambio do dia

entrada (parametros): valor, taxa
lógica: valor * taxa
saida esperada: ex: se entrada 10 e taxa 5.50, retorno 55.00

b) imprima no output o valor final

*/

function exibirValorFinal(valor, taxa)
{
    let valorFinal = valor * taxa;
    console.log(`Valor final:\n${valor} * ${taxa} = ${valorFinal} `);
}

exibirValorFinal(50, 5);