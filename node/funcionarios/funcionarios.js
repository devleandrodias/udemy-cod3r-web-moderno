const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"

const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'

const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {

    //Todos os dados do arquivo de Json remoto
    const funcionarios = response.data

    //Mulher chinesa com menor salário

    const mulherChinesaMenorSalario = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(mulherChinesaMenorSalario)
})