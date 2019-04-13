//Quando você declara o VAR ocorre o HOISTING que a variável delcarada possui escopo global mesmo sendo declarado no final do código

console.log('A = ', a); //Isso gera undefined pois ela está declarada já no inicío do código mesmo sem ser declarada

var a = 'Aaaaa';

console.log('A = ', a);

let b; //Se for declarada antes tudo bem

console.log('B = ', b); //Isso com o LET gera um erro posi não ocorre hoisting

b = 'Bbbbbbb';

console.log('B = ', b);