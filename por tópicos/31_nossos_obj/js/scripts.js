let pessoa = {
    nome: "Gustavo",
    idade: 26,
    falar: function() {
        console.log("Olá, tudo bem?");
    }, // Um método é criado dentro de uma objeto por meio de uma function
    soma: function(a, b) {
        return a + b;
    } 
}

console.log(pessoa.nome);

pessoa.falar();

var soma = pessoa.soma(2, 2);

console.log(soma);