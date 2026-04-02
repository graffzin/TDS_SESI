/* 

a) utilize o operador ternario (? :) para calcular o preco final de carrinho de compras

b) se o valor for maior que 100, subtraia 10%. caso contrario, mantenha o valor original

c) explique (em comentario no codigo) por que voce escolheu o nome da variavel booleana que armazena a condicao de desconto

*/

var valorCarrinho = 150;
let indicadorDesconto = valorCarrinho <= 100  ? "Valor original" : "Voce tem 10% de desconto";
var valorComDesconto;

console.log (indicadorDesconto);

if (valorCarrinho > 100)
{
    valorComDesconto = valorCarrinho - valorCarrinho / 10;
    console.log (`Valor final: ${valorComDesconto} `);
}

else
{
    console.log (`Valor final: ${valorCarrinho} `);
}
