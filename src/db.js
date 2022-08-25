let sequence = {
    _id: 1,
    get id() { return this._id++ }
}

let produtos = {}
function salvarProduto(produto) {
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

function excluirProduto(id) {
    delete produtos[id]
}

module.exports = {
    getProdutos: getProdutos,
    salvarProduto: salvarProduto,
    getProduto: getProduto,
    excluirProduto: excluirProduto
}