// inserir o elemento no body
var novoParagrafo = document.createElement("p");

console.log(novoParagrafo);

var texto = document.createTextNode("Este é o elemento do parágrafo");

novoParagrafo.appendChild(texto);

var body = document.querySelector("body");

console.log(body);

body.appendChild(novoParagrafo);

// inserir em um container

var container = document.getElementById("container");

console.log(container);

var el = document.createElement("span");

el.appendChild(document.createTextNode("texto do span"));

console.log(el);

container.appendChild(el);