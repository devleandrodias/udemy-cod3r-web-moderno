const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Ler de forma Síncrono (Não recomendado)
const conteudo = fs.readFileSync(caminho, 'UTF-8')
console.log(conteudo)

// Ler de forma Assincrono (Recomendado)
fs.readFile(caminho, 'UTF-8', (err, conteudo) => {
    //O conteudo retornado é uma string que pode ser convertida para Json
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//Forma mais simples de ler o conteudo
const config = require('./arquivo.json')
console.log(config.db)

//Leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})