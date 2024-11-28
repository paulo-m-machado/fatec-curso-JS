const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
]

const getTotal = item => item.qtde * item.preco
const somar = (acc, el) => {
    console.log(acc, el)
    return acc + el
}

console.log(carrinho
    .map(getTotal)
    .reduce(somar)
)

// desafio proprio reduce
Array.prototype.meuReduce = (fn, inicial) => {
    let cont = inicial
    for(let i = 0; i < this.length; i++){
        if(!cont && i === 0) {
            cont = this[i]
        }
        else {
            fn(cont, this[i], i, this)
        }
    }
    return cont
}

console.log(carrinho
    .map(getTotal)
    .meuReduce(somar)
)