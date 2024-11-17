//funcao anonima / sem nome
(function (a, b, c) {
    return a + b + c
})

//expressao funcao
let x = 1
// criar uma funcao sem nome em uma variavel
//(poderia ser criado uma funcao com nome ex: function abd(ab),
//mas nunca seria possivel chamar esta funcao)
const sum = function (a, b){
    return a + b
}

let result = sum(4, 78) //chama funcao usando a variavel
console.log(result)

const anotherSum = sum() //passa a funcao para outra variavel por meio da variavel anterior