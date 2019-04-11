const escola = "Cod3r";

//Retorna 4 letra da string começando pelo zero
console.log(escola.charAt(4));

//Retorna vazio
console.log(escola.charAt(5));

//Retorna o valor da tabela ONICODE
console.log(escola.charCodeAt(3));

//Retorna a posição na string do busca
console.log(escola.indexOf('3'));

//Gerar uma string não incluindo indice final
console.log(escola.substring(0, 3));

//Concatena as strings
console.log('Escola '.concat(escola).concat('!'));

//Substitui a posição pelo valor passado
console.log(escola.replace(3, 'e'));

//Gera um array através de um separador
console.log('Ana,Maria,Pedro'.split(','));