// quando uma variavel é criada seu valor ja esta disponivel
let a = 1
console.log(a)

const primeiroElemento = el => el[0]

const letraMinuscula = el => el.toLowerCase()

// promise é um dado que sera recebido no futuro
let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Maria', 'Jose'])
})

// o promise.then é executado quando a promessa é cumprida
p.then(primeiroElemento)
.then(primeiroElemento)
.then(letraMinuscula)
//  quando é passada um valor para a funcao ela sera executada usando este valor como elemento
// .then(el => console.log(el))
.then(console.log)