// Operador ... rest(juntar)/spread(espalhar)
// Usar rest com parâmetro de função
// Usar spread com objeto

const funcionario = { nome: 'Maria', salario: 2042.25 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

const grupoA = ['João', 'Beatriz', 'Adriele']
const grupoFinal = ['Thaísa',  ...grupoA, 'Leandro', 'Leonardo']
console.log(grupoFinal)