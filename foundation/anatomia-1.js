//declarar funcoes

function sayHello() {
    console.log('hello!')
}

sayHello()

function sayHelloTo(name) {
    console.log(`hello ${name}!`)
}

sayHelloTo('michael')

function returnHi() {
    return 'hi'
}

let greeting = returnHi()
console.log(greeting)
console.log(returnHi())

function returnHiTo(name) {
    return `Hi ${name}`
}

console.log(returnHiTo('bia'))