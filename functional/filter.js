const num = [1, 2, 3, 4, 5]

const maiorQZero = el => el > 0
const maiorQDez = el => el > 10
const par = el => el % 2 === 0

console.log(num.filter(el => el > 0))
console.log(num.filter(maiorQZero))
console.log(num.filter(maiorQDez))
console.log(num.filter(par))

const students = [
    {name: 'jake', score: 6.4},
    {name: 'susan', score: 8.6},
    {name: 'emma', score: 9.4},
    {name: 'peter', score: 9.1}
]

const estudanteBom = el => el.score >= 9

console.log(students.filter(estudanteBom))