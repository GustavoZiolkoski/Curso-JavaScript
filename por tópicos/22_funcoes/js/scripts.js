function primeiraFuncao() {

    console.log("Hello world das funções");

}

primeiraFuncao();

function dizerNome(nome) {

    console.log("O nome é: " + nome);

}

dizerNome("Gustavo");

var nomeDoBancoDeDados = "João";

dizerNome(nomeDoBancoDeDados);

function soma(a, b) {
    var soma = a + b;
    return soma;
}
// O return esta atribuindo a variável soma para as demais funções.
var somaUm = soma(2, 5);

console.log(somaUm);

var somaDois = soma(3, 5);

console.log(somaDois);