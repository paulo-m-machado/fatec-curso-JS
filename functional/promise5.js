function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log()
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        }
        catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('testando...', 0.9)
    .then(v => console.log(`valor: ${v}`))
    // um erro pode ser tratado especificamente dentro de um .then
    .then(
        // se ocorrer algum erro como o demonstrado abaixo
        v => consol.log(v),
        // ele pode ser tratado dentro deste then sem chegar ao catch geral
        err => console.log(`erro esp.: ${err}`)
    )
    .then(() => console.log('quase fim!'))
    // catch normalmente colocado no final para fazer o tratamento 
    // de qualquer erro que aconteça anteriormente e por que catch
    // nao passa o valor para os proximos passos
    .catch(err => console.log(`erro: ${err}`))
    .then(() => console.log('fim!'))