/* 
a) declare variaveis para armazenar o nome de um produto (string), o preco unitario (number) e se ele esta em estoque (boolean)

b) exiba o resultado no console utilizando uma unica string formatada com template string
*/

let produto = "Notebook";
const preco = 3500;
let estoque = true;

console.log(typeof produto);
console.log(typeof preco);
console.log(typeof estoque);


console.log(`O item ${produto} custa R$ ${preco}\nDisponibilidade: ${estoque}.`);
