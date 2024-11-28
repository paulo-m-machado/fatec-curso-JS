function gerarNumerosEntre(min, max, tempo) {
    if(min > max) { 
        [min, max] = [max, min]
    }

    return new Promise(resolve => {
        setTimeout(function() { 
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            // console.log(`esperado tempo: ${tempo}`)
            resolve(aleatorio)
        }, tempo)
    })
}

// funcao para fazer diversas chamadas
function gerarVariosNumeros() {
    // cria um array de promise
    return Promise.all([
        // executa todas estas chamadas em paralelo
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
    ])
}

// por causa da funcao o log so é executado qunado todas as chamadas forem concluidas
gerarVariosNumeros()
    .then(console.log)