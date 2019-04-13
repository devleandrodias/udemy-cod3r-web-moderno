const saudacao = 'Opaa'; //Contexto léxico, local no qual sua variável foi definida fisicamente no código

function exec() { 
    const saudacao = 'Falaaa';
    return saudacao;
};

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    sobrenome: 'Tostes',
    idade: 19,
    endereco: {
        rua: 'Av. Ai',
        numero: 900
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);