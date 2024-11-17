function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3)
logParams(1, 2, 3, 4, 5)//se forem passa mais parametros do que os necessarios, eles sao ignorados, e nao impede de executar a funcao
logParams(1, 2)//passar valores a menos tambem nao impede a execução da função

//é possivel definir valores padram para so parametros de uma função
//estes valores serao utilizados se nao for passado um parametro
function defaultParams(a = 1, b = 2, c = 3) {
    console.log(a, b, c)
}

defaultParams(5, 6, 7)
defaultParams()
defaultParams(4, 5)

//é possivel pasar diversos valores para um parametro utilizando arrays
function logNums(nums) {
    for(let n of nums){
        console.log(n)
    }
}

logNums([1, 2, 3, 4, 5])//neste caso o valor passado pela funcao precisa ser um array

//para fazer com que o valor passa nao precise ser escrito como array nos podemos utilizar os ...
function logNums2(...nums) {
    console.log(nums)
}

logNums2(1, 2, 3, 4, 5, 6)

//exemplo de uso
function sumAll(...nums) {
    let total = 0
    for (let n of nums){
        total += n
    }
    console.log(total)
}

sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9)