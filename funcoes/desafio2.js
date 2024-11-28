const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true},
]

// 1. deixar apenas elementos com fragil: true
// 2. mostrar qtde e preco -> total
// 3 media

const ehFragil = item => item.fragil === true
const calcTotal = item => item.qtde * item.preco
const calcMedia = (cont, el, i, arr) => {
    if(i + 1 == arr.length){
        cont = (cont + el) / arr.length
    }
    else {
        cont += el
    }
    return cont
}

const carrinhoFragil = carrinho.filter(ehFragil)
const carrinhoTotal = carrinhoFragil.map(calcTotal)
const carrinhoMedia = carrinhoTotal.reduce(calcMedia)

console.log(carrinhoFragil)
console.log(carrinhoTotal)
console.log(carrinhoMedia)