//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
};

imprimirSoma(2, 3); //2 + 3
imprimirSoma(2, 3, 4, 5); //2 + 3 e ignora o resto
imprimirSoma(2); // 2 + undefined = NaN
imprimirSoma(); //NaN

//Função com retorno
function soma(a, b = 0){ //O segundo valor padrão vale 0
    return a + b;
};

console.log(soma(2, 3));
console.log(soma(2));