// String, Number, Undefined, Null, Boolean, Symbol
const nome = 'Luiz'; // string
const nome1 = "Luiz"; // string
const nome2 = `Luiz`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta pra local nenhum na memória
let sobreNomeAluno = null; // Nulo -> não aponta pra local nenhum na memória
const aprovado = true; // Boolean = true, false (lógico)

let a = [1, 2];
let b = a;

console.log(a, b);

b.push(3);
console.log(a, b);