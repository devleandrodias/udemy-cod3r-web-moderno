const express = require('express')
const saudacao = require('./saudacaoMid')
const bodyParser = require('body-parser')
const usuarioApi = require('./api/usuario')
const app = express()

require('./api/produto')(app, 'passando parâmetros')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Por padrão saudação é uma função middeware
app.use(saudacao('Leandro Dias'))

//Função Middleware
app.use('/opa', (req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/cliente/relatorio', (req, res, next) => {
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res, next) => {
    // let body = ''
    // req.on('data', function(part) {
    //     body += part
    // })

    req.on('end', function() {
        res.json(JSON.stringify(req.body))
    })
})

app.get('/cliente/:name', (req, res, next) => {
    res.send(`Cliete ${req.params.name} foi selecionado!`)
})

app.get('/opa', (req, res, next) => {

    console.log('Durante...')

    // res.json([
    //     { id: 7, name: 'Leandro Dias', age: 18 },
    //     { id: 10, name: 'Thaísa Castro', age: 19 },
    //     { id: 16, name: 'Vitória Cristine', age: 15 }
    // ])

    // res.json({
    //     name: 'iPad 32Gb',
    //     price: 4999.99,
    //     description: 'Caro pra cacete'
    // })

    // res.send('Por aqui tudo tranquilo!')
    next()
})

//A ordem importa!
app.use('/opa', (req, res, next) => {
    console.log('Depois...')
    next()
})

app.listen(9000, () => {
    console.log('Servidor ligado...')
})