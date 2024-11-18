const numbers = [1, 2, 3, 4, 5, 6]

//reduce executa a função passando cada elemento do array como um parametro da função
const sum = (total, el) => total + el
const total = numbers.reduce(sum, 3) //neste caso o 3 é passado como valor inicial, se ele nao for passado sera usado o primeiro valor do array
console.log(total)

//syntax de uma funcao para reduce()
//array.reduce(function(total, vlrAtual, indexAtual, array), vlrInicial)
//total = vlrInicial ou ao valor previamente retornado pela funcao
//vlrAtual = o valor do elemento que foi lido nesta execucao da funcao
//indexAtual = o index do elemento que foi lido nesta execucao da funcao
//array = o array a que o elemento atual pertence

const media = (cont, el, i, arr) => {
    if(i + 1 == arr.length){
        cont = (cont + el) / arr.length
    }
    else{
        cont += el
    }
    return cont
}
console.log(numbers.reduce(media))