// 1 -
const estoque = ["Placa de video", "Placa mae", "Fonte", "Processador", "Gabinete"];
estoque.push("SSD");
let clienteNome = "Gustavo";
let clienteIdade = 16;
let possuiCupom = true;
let valorTotal = 1500;
let quantidadeItens = estoque.length;

// 2 -
function processarVenda(valorTotal, cupomAtivo)
{
    var verificar = valorTotal >= 500 || cupomAtivo === true ? valorTotal * 0.85 : valorTotal;
    return (verificar);
}

// 3 -
if (clienteIdade >= 16)
{
    console.log(`Venda autorizada para: ${clienteNome}\n`);
}

else 
{
    console.log(`Venda bloqueada: Idade insuficiente.`);
}

// 4 - 
for (let i = 0; i < quantidadeItens; i++)
{
    console.log (`Despachando item: ${estoque[i]}... OK!`);
}
console.log ("Fim\n");
estoque.shift();

// 5 -
let quantidadeFinalItens = estoque.length;
console.log(`Relatorio da loja: Cliente ${clienteNome} processou um pedido de R$ ${processarVenda(valorTotal, possuiCupom)}. Itens restantes no estoque: ${quantidadeFinalItens}. `);