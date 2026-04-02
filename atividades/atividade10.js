/* 

a) crie um array com 5 nomes de itens de hardware

b) adicione um novo item ao final da lista utilizando obrigatoriamente o metodo .push()

c) remova o primeiro item da lista utilizando obrigatoriamente o metodo shift()

d) exiba o estado final da lista

*/

const hardwares = ["Placa de video", "Placa mae", "Fonte", "Processador", "Gabinete"];

hardwares.push("SSD");
hardwares.shift();
console.log(hardwares);
