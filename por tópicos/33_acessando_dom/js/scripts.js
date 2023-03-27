// tag -> para acessar uma informação pela tag

var titulo = document.getElementsByTagName('h1')[0];

console.log(titulo);

var lis = document.getElementsByTagName('li');

console.log(lis[3]);

console.log(lis);

// id -> para acessar uma informação por meio do id

var paragrafo = document.getElementById('paragrafo');

console.log(paragrafo);

// class -> para acessar uma informação por meio do class

var itensDaLista = document.getElementsByClassName('item');

console.log(itensDaLista);