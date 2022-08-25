const db = require('./db.js')
let port = 8080
let express = require('express')
let app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos())
})

app.get('/produto/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})

app.post('/salvarProduto', (req, res, next) => {
    let produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produto/:id', (req, res, next) => {
    let produto = db.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produto/:id', (req, res, next) => {
    db.excluirProduto(req.params.id)
    res.send('Produto Deletado')
})


app.listen(port, () => {
    console.log(`Servidor atendendo em ${port}`)
})