
const nomes = ['Gustavo', 'Pedro', 'João', 'Maria'];

// For clássico - Geralmente com iteráveis (array ou strings)
// For in- Retorna o índice ou chave (string, array, ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

// FOR CLÁSSICO
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
};

console.log('######');

// FOR COM ÍNDICE (obtém o índice)
for (let i in nomes) {
    console.log(nomes[i]);
};

console.log('######');

// FOR COM TODOS OS VALORES
for (let valor of nomes) {
    console.log(valor);
}

console.log('######');

// TEM UMA FUNÇÃO PRÓPRIA QUE TAMBÉM SERVE PARA ISSO
nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});