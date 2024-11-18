// quando uma função pode operar usando outra função
// usando ela como argumento ou retornando ela

//passando função como parametro
function run(fn){
    return fn()
}

function sayHello(){
    console.log(`hello!`)
}

run(sayHello)

run(function(){
    console.log(`aaa`)
})

const result = run(Math.random)
console.log(result)