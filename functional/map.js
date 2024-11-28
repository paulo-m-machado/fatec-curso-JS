//funções map executam as funções para o array inteiro
const num = [1, 2, 3, 4, 5]
// syntax mais comleta de uma funcao anomima map
// const num2 = num.map(function (el) {
//     el * 2
// })
// syntax mais compacta
const num2 = num.map(el => el * 2)

// uma funcao map espera receber 3 valores:
// o valor do elemento, o index e o array
// nesta ordem

//um exemplo da mesma coisa escrita sem uso de uma funcao map
const num3 = []
for(let n of num) {
    num3.push(n*2)
}

console.log(num, num2, num3)

const students = [
    {name: 'jake', score: 6.4},
    {name: 'susan', score: 8.6},
    {name: 'emma', score: 9.4},
    {name: 'peter', score: 9.1}
]

//funcao map para arredondar notas
console.log(students, students
    .map(el => el.score)
    .map(Math.ceil)
)