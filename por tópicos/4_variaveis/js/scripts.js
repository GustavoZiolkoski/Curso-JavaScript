var teste = 1;

nome = 'João';

teste = 'Gustavo';

console.log(teste);

console.log(nome);

//A variável só funciona com esses dois caracteres especiais.
var $nome = 'ASD';
var _nome = 'ASD2';

console.log($nome);
console.log(_nome);

//A variável não funciona com o número na frente, mas funciona se ele estiver no final.
var nome5 = 'ASD3';

console.log(nome5);

var meuPrimeiroNome = 'Gustavo';
console.log(meuPrimeiroNome); // camelCase

var meusobrenome = 'Ziolkoski';

console.log(meusobrenome);

// Há duas outras forma de declarar a variável também. Usando let e const.

let testando = 1;
const ola = 2;

console.log(testando);
console.log(ola);

var meuNome;
// Ainda não está definida a variável.
console.log(meuNome);

meuNome = 'Gustavo';
// Já está definida a variável.
console.log(meuNome);