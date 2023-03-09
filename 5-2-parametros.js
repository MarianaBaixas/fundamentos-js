// parâmetros de função
function soma(numero1, numero2) {
    return numero1 + numero2;
}

// console.log(soma(2, 2))
// console.log(soma(245, 20))
// console.log(soma(-500, 60))

// parâmetros no momento em que a função é definida (no caso, numero1, numero2, etc)
// argumentos como os dados que utilizamos para executar a função (ou seja, 30, 45, etc)

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`
}

// console.log(nomeIdade(40, "Juliana"))

function multiplica(numero1=1, numero2=1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5)))
