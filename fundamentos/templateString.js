//Template string

const nome = "Thaísa Castro";
const contatenacao = "Olá " + nome + "!";
const template = `Olá ${nome}!`;

console.log(contatenacao);
console.log(template);

//Você pode concatenar funções dentro de templates string
const up = texto => texto.toUpperCase();
console.log(`Eii... ${up('cuidado')}!`);