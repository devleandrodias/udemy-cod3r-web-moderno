// A e B possuem a mesma referência de objeto 
// e apontam pro mesmo lugar na memória e isso é uma atribuição por refeência
const a = {nome: "Leandro"}
console.log(a);

const b = a;
b.nome = "Thaísa";
console.log(b);

//Aqui os valores são independêntes e isso é uma passagem por valor
let c = 3;
let d = c;
d++;

console.log(c, d);

//Undefined nunca foi inicializada
let valor;
console.log(valor);

//Null - Ausência de valor (Sempra use null quando quiser zerar o valor de uma variável, nunca undefined)
let valor2 = null;
console.log(valor2);
// console.log(valor2.toString()); //Isso dá erro

let produto = {};
console.log(typeof(produto));
console.log(produto.preco); //Não definida (Undefined)
produto.preco = undefined;
console.log(!!produto.preco);
produto.preco = null; //Opte sempre pelo null
console.log(produto);