//first class function -> quando uma função pode ser armazenada dentro de uma variavel
const sum = function(a, b){
    return a + b
}

const sub = function(a, b){
    return a - b
}

const multi = (a,b) => a * b

const div = (a,b) => a / b

console.log(sum(10, 20))
console.log(sub(10, 20))
console.log(multi(10, 20))
console.log(div(10, 20))
