console.log(typeof(console)); //Isso é um objeto

console.log(Math.ceil(6.70)); //Arredonda um valor para cima

//Notação ponto serve para você acessar uma função defindada dentro de um objeto

const obj1 = {};
obj1.nome = 'Bola'; //Isso é igual
obj1.nome['Bola']; //A isso

//Outro exemplo função ponto
const obj2 = {
    nome: 'Leandro',
    idade: 18,
    categoriaHabilidade: {
        categoria: 'software'
    },
    habilidades: 'JavaScript'
};

console.log(obj2.categoriaHabilidade.categoria);

//Outro exemplo de função
class Obj {
    constructor(nome) {
        this.nome = nome; //This referência ao objeto criado, torna nome publico que serão expostas para fora da função quando for instânciada
        this.execult = function(){
            console.log('Palmeiras não tem mundial!');
        }
    }
}

const obj3 = new Obj('Cadeira');
const obj4 = new Obj('Mesa');

console.log(obj3.nome, obj4.nome);
obj3.execult();