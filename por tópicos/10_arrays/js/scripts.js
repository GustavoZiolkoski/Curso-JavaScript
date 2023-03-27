var arr = [5, 'Gustavo', true, {teste: 1, teste: 2}]; // obj => usa {}

console.log(arr);

var arr2 = [2,3,4,5,6];

console.log(arr2);

console.log(arr[1]); // O índice começa sempre no 0.
console.log(arr2[0]);

// Para adicionar dentro do array, você tem que colocar o indice de onde quer colocar e depois o que será inserido.

arr[4] = 10;

arr[0] = 'teste';

console.log(arr);

console.log(typeof arr);