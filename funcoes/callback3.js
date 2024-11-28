const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
]

const apenasNomes = el => el.nome

const somaPronta = el => el.qtde * el.preco

console.log(carrinho.map(apenasNomes))
console.log(carrinho.map(somaPronta))

// criando prorpria funcao map:
// pode ser criado com uma estrutura tradicional de funcao, ex:
// function meuMap(array, fn){ ... }
// mas criar como Array.prototype ja indica que ele recebe um array
Array.prototype.meuMap = function(fn) {
    const novoArray = []
    // este for loop corre o array começando do indice 0 ate o seu fim
    for (let i = 0; i < this.length; i++){
        // envia para o novo array o resultado da funcao passada
        // define que esta funcao deve receber 3 valores
        // o valor do elemento, o indice do elemento e o array
        novoArray.push(fn(this[i], i, this))
    }
    return novoArray
}

console.log(carrinho.meuMap(somaPronta))