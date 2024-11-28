function gerarNumerosEntre(min, max, numProibios) {
    if(min > max) { 
        [min, max] = [max, min]
    }

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min

        if(numProibios.includes(aleatorio)){
           reject('numero repitido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros, tentativas) {
    try{
        const num = []
        for (let _ of Array(qtdNumeros).fill()) {
            num.push(await gerarNumerosEntre(1, 60, num))
        }
        return num
    } catch(e) {
        if(tentativas > 10) {
            throw 'cringe'
        } else {
            gerarMegaSena(qtdNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)