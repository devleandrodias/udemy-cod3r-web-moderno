//Cuidado com scope dentro do JavaScript, existem apenas duas, global e função
//Evite ao máximo variáveis globais
//Variáveis do tipo var tem escopo global e função

{
    {
        {
            { var sera = 'Será' } //Isso é uma variável global
        }
    }
}

console.log(sera); 

function teste(){ //Variáveis dentro de uma função tem scopo apenas dentro da função
    var local = 123;
    console.log(local);
};

teste();