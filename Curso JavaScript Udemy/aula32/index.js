/*
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const numeros = [b, c, a];
[a, b, c] = numeros;

console.log(a, b, c);
*/
//  ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
// Índice  ->     0   1   2   3   4   5   6   7   8
/*
const numeros = [100,200,300,400,500,600,700,800,900]; // Valor do array.
// const primeiroNumero = numeros[0]; // Pode ser feito dessa forma, ma sé mais trabalhoso quando se quer fazer em sequência. Podendo ser feito da seguinte forma que está abaixo.
// const [primeiroNumero, segundoNumero, ... resto] = numeros; // Se colocar os 3 pontinhos e criar outra variável será inserido todo o valor que sobrou do array dentro dessa variável.
// A variável ...resto, é considerada ... rest operator ou ...spread operator
// console.log(primeiroNumero, segundoNumero);
// console.log(resto); 
// Pode ser feito da seguinte maneira também, quando quer ignorar algum número 
const [um, , tres, , cinco,  , sete] = numeros; // Pulou os valores utilizando espaços vazios
console.log(um, tres, cinco);
*/
// NESSE CASO HÁ DOIS INDICES
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(numeros[1][2]) // -> Irá acessar o número 6.
const [,[,,seis]] = numeros; // Dessa forma também será acessado o número 6.
console.log(seis);
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]); // Dessa forma também pode ser acessado.