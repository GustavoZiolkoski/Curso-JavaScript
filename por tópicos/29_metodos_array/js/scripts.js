// length -> conta a quantidade de elementos que tem no array

var arr = [1,2,3,4,5];

console.log(arr.length);

// push -> adiciona qualquer coisa ao array (AO FINAL DO ARRAY)

arr.push(6);
arr.push('Qualquer coisa');


console.log(arr);

// pop -> remove o último elemento do array

arr.pop();

console.log(arr);

// unshift -> para adicionar um elemento no início do array

arr.unshift(0);
arr.unshift('teste');

console.log(arr);

// shift -> remove o primeiro elemento do array

arr.shift();

console.log(arr);

// acessar o último elemento do array

console.log(arr[arr.length - 1]);

// isArray -> usado para verificar se é um array

console.log(Array.isArray(5));

console.log(Array.isArray(arr));
