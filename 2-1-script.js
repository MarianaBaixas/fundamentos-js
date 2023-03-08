// var
// pode usar antes de declarar
// não usa mais, devido a erros

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);
// var area;

// let
// precisa declarar antes, é possível mudar o valor

// let forma = 'retângulo'
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retângulo') {
//     area = altura * comprimento;
// } else {
//     area = altura * comprimento / 2;
// }

// console.log(area)

// const
// constante, não é possível alterar o valor
// deve atribuir um valor

const forma = 'quadrado';
const altura = 5;
const comprimento = 7;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = altura * comprimento / 2;
}

console.log(area)