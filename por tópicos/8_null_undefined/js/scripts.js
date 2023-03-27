// Hoisting - Içamento (ELE DECLARA A VARIÁVEL, MAS NÃO INICIALIZA ELA)
console.log(numero);
var numero = 5;
console.log(numero);
console.log(sobrenome); 

var nome = null; // Fica como null
var sobrenome; // Fica como undefind

console.log(nome);
console.log(sobrenome);

nome = 'Gustavo';

console.log(nome);

