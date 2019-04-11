//Literal falso
let isAtivo = false;
console.log(isAtivo);

//Literal ativo
isAtivo = true;
console.log(isAtivo);

//Converter algo com dupla negação para ver tipo booleano da váriável
isAtivo = 1;
console.log(!!isAtivo);
console.log(!false);

//Tipos verdadeiros
console.log(!!13);
console.log(!!-3);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

//Tipos falsos
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

let nome = '';
console.log(nome || 'Desconhecido'); ///Retorna primeiro valor verdadeiro