// splice -> adiciona um elemento no meio/entre dos/os array

var arr = [1,2,3,4,5];

arr.splice(2, 0, 999); // arr.splice(2(número do indice que quer adicionar), 0(a quantidade de elementos que quer deletar), 999(o elemento que deve ser adicionado))

console.log(arr);

arr.splice(4, 1);// (4(número do índice), 1(quantidade de elementos que devem ser retirados))

console.log(arr);

// indexOf -> ele acha o índice do elemento

console.log(arr.indexOf(5));

// join -> transforma os arrays em strings

var arr2 = ["O", "rato", "roeu", "a", "roupa"];

console.log(arr2); // ARRAY

console.log(arr2.join(", ")); // STRING

// reverse -> para inverter os elementos de ordem

console.log(arr2.reverse());



