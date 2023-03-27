let numero = Number(prompt('Digite um número: ')); // A função prompt sempre vai retornar uma string, então é necessário converter ela para number quando for fazer contas.
// -> numero = Number(numero); Pode ser feito dessa forma ou dessa -> let numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');



numeroTitulo.innerHTML = numero;

texto.innerHTML = ''; // Para limpar o que está escrito dentro do HTML.
texto.innerHTML += `<p>Seu número +2 é ${numero +2}.</p>`;
texto.innerHTML += `<p>Raiz Quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;