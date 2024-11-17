const increment1 = function(n) {
    return n + 1
}

//funcao seta (function arrow)
//sempre declara funcoes anonimas
const increment2 = (n) => {
    return n + 1
}

//funcao arrow com um unico parametro pode ser criada sem parenteses()
const increment3 = n => {
    return n + 1
}

//para reduzir ainda mais a syntaxe é possivel criar
//funcoes arrow sem chave, estas terao apenas uma linha
// de codigo que sera retornada (sera executada como se tivesse um return na frente dela)
const increment4 = n => n + 1

console.log(increment1(3))
console.log(increment2(5))
console.log(increment3(7))
console.log(increment4(19))

//é possivel tambem criar estas funcoes sem chave com mais de 1 parametro
//voltando a usar o parenteses
const sum = (a,b) => a + b

console.log(sum(2, 3))