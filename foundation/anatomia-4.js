//IIFE - immediatly invoked function expression
//funcao expressao imediatamente invocada
//uma funcao anonima nao associada a uma variavel normalmente
//nao possui uma maneira de ser chamada.
//mas ela pode ser invocada se seus parametros forem passados
//logo depois dela ser declarada
//IMPORTANTE: se for utilizado mais do que uma IIFE é necessario colocar ;
//no fim, logo é mais facil sempre colocar ;
(function (a, b, c) {
    console.log(`Resultado: ${a + b + c}`)
})(1, 2, 3);

//IIFE sao uteis para trabalhar com valores em um escopo mais controlado
//enves de criar e computar valores e variaveis em um nivel global o codigo
//sera executado dentro da funcao

//é extreamente comum que IIFEs não tenham parametro
(function () {
    let x = 15
    console.log(x)
})();

//IIFE tambem podem ser funcoes arrow
(() => {
    console.log(`isto funciona`)
})(); //funcao arrow sem parametro

(() => console.log(`isto tambem`))();//funcao arrow de uma linha sem parametro

(a => console.log(a))(`vc n vai acreditar cara`); //funcao arrow de uma linha com um parametro