// selecionador elemento
var title = document.querySelector("#title"); // # quando é id

console.log(title);

// innerHTML
title.innerHTML = "Testando o texto alterado!"

// textContent -> mais utilizado, recomendado e performático (MELHOR OPTAR POR ESSA AQUI)
var subtitle = document.querySelector(".subtitle"); // . quando é class

console.log(subtitle);

subtitle.textContent = "Testando o textContent"; // É RECOMENDADO UTILIZAR textContent ao inves de inner.HTML

