const porta = 3000

const express = require('express')
const bd = require('./bancoDeDados')
const app = express()
const bodyParser = require('body-parser')

//Faz um parser dos dados através de middleware, transformando o corpo da requisição em objeto
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bd.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bd.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // O método send sempre converte para JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bd.excluirProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bd.excluirProduto({ id: req.params.id })
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})