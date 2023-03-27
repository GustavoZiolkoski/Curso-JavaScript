// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos - let nomeCliente = 'João'; e não (let n = 'João';)
// Não pode começar o nome de uma constante com um número - let = 1nome;
// Não pode conter espaços ou traços - let nome Cliente ou let nome-Cliente;
// Utilizamos CamelCase - Usa-se let nomeCompletoDoCliente = 'Gustavo';
// Não pode modificar o valor de uma constante.
/*
const nome= 'João';
nome = 'Gustavo';
console.log(nome);
*/
// Case-sensitive - tem diferença entre letra maiúscula e letra minúscula.
// NÃO UTILIZAR VAR, UTILIZE CONST.
const primeiroNumero = 5; // console.log(typeof primeiroNumero); = Number
const segundoNumero = 10;
/*
const primeiroNumero = '5'; -> 5 é uma String = texto, pois está dentro de aspas.  
const segundoNumero = 10; -> 10 é um Number = número, pois está dentro de aspas. 
*/
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
console.log(resultadoTriplicado);
console.log(typeof primeiroNumero);


