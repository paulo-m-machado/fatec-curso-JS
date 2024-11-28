function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('executando promise...'))
//     .then(esperarPor)
//     .then(() => console.log('executando promise...'))
//     .then(esperarPor)
//     .then(() => console.log('executando promise...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 2000)
    })
}

function retornarValorRapido() {
    return 20
}

async function executar() {
    let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

// executar().then(console.log)

executarDeVerdade()