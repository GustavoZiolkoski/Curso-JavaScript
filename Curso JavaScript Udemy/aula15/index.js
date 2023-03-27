// Padrão do JavaScript IEEE 754-2008 
let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0

num1 = parseFloat(num1.toFixed(2)); // Para corrigir as imprecisões, porque na hora de somar a conta de numero pequenos com vírgula há uma certa imprecisão. OBS: Retirar essa fórmula e ver o resultado.

console.log(num1);
console.log(Number.isInteger(num1));

//console.log(num1.toString() + num2);
//num1 = num1.toString();
//console.log(num1.toString(2)); //Colocar o numero 2 dentro dos parenteses para mostrar o número em formato binário.
//console.log(num1.toFixed(2)) //Para arredondar para duas casas decimais.
//console.log(Number.isInteger(num1)); //Para saber se é um número inteiro.
/*
let temp = num1 * 'Olá'; // NaN - Not a number
console.log(temp);
console.log(Number.isNaN(temp))
*/


