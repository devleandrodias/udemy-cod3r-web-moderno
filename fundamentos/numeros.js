const peso1 = 1.0;

const peso2 = Number('2.4');

//Veririfca se o número é inteiro
console.log(Number.isInteger(peso1)); 
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //Limita número de casas decimais depois da vírgula

console.log(media.toString(2)); //Converte o número para binário