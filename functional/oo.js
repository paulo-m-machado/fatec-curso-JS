// funcao construtora -> cria objetos
function Produto(nome, preco, desc = 0.5) {
    this.nome = nome
    this.preco = preco
    this.desc = desc

    this.precoFinal = () => {
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('caneta', 8.59)
console.log(p1.nome)

const p2 = new Produto('geladeira', 2345.98)
console.log(p2.preco)

console.log(p2.precoFinal())