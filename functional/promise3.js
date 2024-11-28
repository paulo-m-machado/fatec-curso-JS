function gerarNumerosEntre(min, max) {
    if(min > max) { 
        [min, max] = [max, min]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1,30)
    .then(num => num * 10)
    .then(numx10 => console.log(`O numero gerado foi: ${numx10}`))