// expressão de função 
// anonimas - não tem nome

// funções e var são 'listadas' no topo - HOISTING

const soma = function(num1, num2) {return num1 + num2}
// console.log(soma(1, 1))

console.log(apresentar())

function apresentar() {
    return "olá!"
}
