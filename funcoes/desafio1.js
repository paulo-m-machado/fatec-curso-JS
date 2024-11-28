//somar(3)(4)(5)
function somar(n1){
    return n2 => {
        return (n3 = 0) => {
            return n1 + n2 + n3
        }
    }
}

console.log(somar(3)(4)(5))

//calcular(3)(7)(fn)
//fn -> 3 + 7
//fn -> 3 - 7
//fn -> 3 * 7
//fn -> 3 / 7

function calcular(n1){
    return n2 => {
        return fn => {
            return fn(n1,n2)
        }
    }
}

function sum(n1, n2){
    return n1 + n2
}

function sub(n1, n2){
    return n1 - n2
}

function multi(n1, n2){
    return n1 * n2
}

function div(n1, n2){
    return n1 / n2
}

console.log(calcular(3)(7)(sum))
console.log(calcular(3)(7)(sub))
console.log(calcular(3)(7)(multi))
console.log(calcular(3)(7)(div))