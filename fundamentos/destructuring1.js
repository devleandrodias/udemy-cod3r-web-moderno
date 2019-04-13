//Novo recurso do EC2015

const pessoa = {
    nome: 'Ana',
    idade: 19,
    endereco: {
        lograadouro: 'Rua ABC',
        numero: 1900
    }
};

//Operador de desestruturação
const { nome: n, idade: i } = pessoa; //Tire de Pessoa nome e idade, e agora pode ser usado como variáveis
console.log(n, i);

const { sobrenome: s, bemHumorada: bm = true } = pessoa; //Setar valores pré definidos caso não ouver retorna undefined
console.log(s, bm);

const { endereco: { lograadouro: log, numero: num } } = pessoa; //Desestruturando um objeto dentro de outro objeto
console.log(log, num);