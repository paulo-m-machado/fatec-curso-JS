//exemplo utilizando os map, reduce e filter
const students = [
    {name: 'jake', score: 6.4},
    {name: 'susan', score: 8.6},
    {name: 'emma', score: 9.4},
    {name: 'peter', score: 9.1}
]

const estudanteBom = estudante => estudante.score >= 9
const getScore = el => el.score
const media = (cont, el, i, arr) => {
    if(i + 1 == arr.length){
        cont = (cont + el) / arr.length
    }
    else{
        cont += el
    }
    return cont
}

console.log(
    students
        .filter(estudanteBom)//filtra o array para manter apenas estudantes com nota 9 ou maior
        .map(getScore)//pega apenas os valores das notas do que foi retornado do filter
        .reduce(media)//calcula a media das notas retornadas pelo map
)

console.log('array original:')
console.log(students)
console.log('array filtrado: ')
console.log(students.filter(estudanteBom))
console.log(`array filtrado e mapeado: ${students.filter(estudanteBom).map(getScore)}`)
console.log(`array filtrado, mapeado e reduzido?: ${students.filter(estudanteBom).map(getScore).reduce(media)}`)