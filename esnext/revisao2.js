//Arrow function
const seuNome = nome => `Olá, ${nome}`
const soma = (a, b) => a + b

console.log(seuNome('Leandro'))
console.log(soma(2, 3))

//Arrow function
const lexico1 = () => console.log(this === module.exports)
const lexico2 = () => console.log(this === exports)
const lexico3 = lexico2.bind({})

lexico1()
lexico2()
lexico3()

//Parâmetros default
function log(texto = 'Node') {
    console.log(texto)
}

log('React')

//Operador rest/spred
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))