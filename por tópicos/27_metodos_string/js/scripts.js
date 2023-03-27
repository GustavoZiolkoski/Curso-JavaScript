// length -> mostra o comprimento ou a quantidade de caracteres que uma string possui.

var nome = "Gustavo";

console.log(nome.length);

var obj = "bola";

console.log(obj.length);

// indexOf -> mostra o indice de um caracter ou uma string, que quer ser verificado

console.log(nome[0]);

var frase = "O rato roeu a roupa do rei de Roma.";

console.log(frase.indexOf("roeu"));

// slice -> usado para remover uma parte da frase

var roeu = frase.slice(7, 11);

console.log(roeu);

// replace -> para trocar uma palavra da string

var novaFrase = frase.replace("roeu", "teste");

console.log(novaFrase);