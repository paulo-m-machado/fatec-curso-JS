class Produto {
    constructor(nome, preco, desc = 0.5) {
        this._nome = nome
        this._preco = preco
        this.desc = desc
    }

    get nome() {
        return `Produto: ${this._nome}`
    }

    set nome(novoNome) {
        this._nome = novoNome.toUpperCase()
    }

    get preco() {
        return this._preco
    }

    set preco(novoPreco) {
        if(novoPreco >= 0) {
            this._preco = novoPreco
        }
    }

    // incluir o get permite chamar a funcao como atributo
    // funcoes incluidas em classes sao chamadas de metodos
    get precoFinal() {
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('caneta', 8.59)
// na linha abaixo o valor de nome é modificado pelo metodo set
p1.nome = 'caneta'
p1.preco = -20
console.log(p1.nome)
console.log(p1.preco)

const p2 = new Produto('geladeira', 2345.98)
console.log(p2.preco)
// exemplo de funcao chamada como atributo
console.log(p2.precoFinal)

console.log(typeof Produto)