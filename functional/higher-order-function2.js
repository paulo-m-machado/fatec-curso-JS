// função que retorna função
function precoFinal(imposto) {
    return function(preco) {
        return preco * (1 + imposto)
    }
}

console.log(precoFinal(0.0875)(25.1))//syntax para passar os parametros para as funções

//umas das vantagens de ter uma função dentro de uma função
//é poder manter consistencia no valor de certos parametros da função
const nycFinalprice = precoFinal(0.0875)

console.log(nycFinalprice(21.7))

//a tecnica de separa os parametros das fuções desta maneira é chamada de curring