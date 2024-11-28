const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados')

console.log(__dirname)
console.log(caminho)

function exibirConteudo(err, conteudo){
    console.log(conteudo.toString())
}

console.log('comeco')
fs.readFile(caminho, {}, exibirConteudo)//read file le o arquivo de forma asyncrona, normalmente aparece no fim do programa
console.log('fim')

console.log('')
console.log('comeco')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('fim')
console.log('')