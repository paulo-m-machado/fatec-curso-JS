// eu sinceramente nao sei o por que destas linhas
const fs = require('fs')
const path = require('path')

function chamarArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(__, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados')
chamarArquivo(caminho)
    // separa o conteudo do arquivo em um array, separado a cada quebra de linha
    .then(conteudo => conteudo.split('\n'))
    // junta os elemntos do array colocando uma , entre eles
    .then(linhas => linhas.join(','))
    .then(console.log)