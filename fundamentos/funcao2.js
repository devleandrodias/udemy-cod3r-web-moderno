//Armazenando uma função dentro de uma variável
const imprimirSoma = function(a, b){
    console.log(a + b);
};

imprimirSoma(2, 3);

//Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
};

console.log(soma(5, 5));

//Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(10, 5));

//Forma mais reduzida
const imprime2 = a => console.log(a);
imprime2("Show fera!");