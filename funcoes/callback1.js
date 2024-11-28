function exec(fn, n1, n2){
    return fn(n1, n2)
}

const somarNoTerminal = (n1, n2) => console.log(n1 + n2)

const subitrairNoTerminal = (n1, n2) => console.log(n1 - n2)

exec(somarNoTerminal, 53, 23)
exec(subitrairNoTerminal, 182, 22)