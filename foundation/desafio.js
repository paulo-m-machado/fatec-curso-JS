// crie uma função que gere um array de acordo com parametros passados
// se receber 1 parametro crie um array em ordem crescente começando do 1 ate este numero
// ex:range(5) -> [1, 2, 3, 4, 5]
// se receber 2 parametros onde o segundo é maior que o primeiro criar um array começando
// do primeiro e acrescentando 1 até chegar no segundo
// ex:range(6, 11) -> [6, 7, 8, 9, 10, 11
// se receber 3 parametros onde o segundo é maior que o primeiro criar um array
//do primeiro elemento até o segundo elemento e crescendo pelo valor do 3 elemento
// ex:range(10, 19, 2) -> [10, 12, 14, 16, 18]
// se receber 2 parametros onde o segundo é menor que o primeiro criar um array começando
// do primeiro e diminuindo por 1 ate chegar no segundo
// ex:range(6, 2) -> [6, 5, 4, 3, 2]
// se receber 3 parametros onde o segundo é menor que o primeiro criar um array começando
// do primeiro e diminuindo ate o segundo pelo valor do 3 parametro
// ex:range(8, -3, 2) -> [8, 6, 4, 2, 0, -2]
function criarArray(a, b = null ,c = 1) {
    
    if(b == null){
        const nums = []

        for(let n = a; n > 0; n--){
            nums[n - 1] = n
        }

        console.log(nums)
    }
    else if(b > a){
        const nums = []
        let i = 0

        for(let n = a; n <= b; n = n + c){
            nums[i] = n
            i++
        }

        console.log(nums)
    }
    else {
        const nums = []
        let i = 0

        for(let n = a; n >= b; n = n - c){
            nums[i] = n
            i++
        }

        console.log(nums)
    }
}

criarArray(5)
criarArray(6, 11)
criarArray(10, 19, 2)
criarArray(6, 2)
criarArray(8, -3, 2)