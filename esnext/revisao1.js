// let e const, let tem escocopo de bloco, var tem scopo de função e global

{
    var a = 2; let b = 3
    console.log(b)
}

console.log(a)

//Template string
const produto = 'MacBook Pro - 15.5'
const valor = 11599.90
console.log(`${produto} caro pra cacete, valor U$${valor}`)

//Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { nome: nomePessoa, idade: idadePessoa } = { nome: 'Leandro', idade: 18 }
console.log(`Nome: ${nomePessoa} com idade de ${idadePessoa} anos!`)