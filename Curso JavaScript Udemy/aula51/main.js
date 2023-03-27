// return
// Retorna um valor
// Termina uma função
function soma(a, b) {
    return a + b; // Esse aqui é o retorno da função.
}
console.log(soma(5, 2));

function soma2(a, b) {
    console.log(a + b); // Só serve para exibir o que a função está fazendo.
}
soma2(5, 2);
/*
document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
}); // Essa função não retorna o valor, mas faz alguma coisa... Troca o fundo do body pra vermelho.
*/
function criaPessoa(nome, sobrenome) {
    return {nome: nome, sobrenome: sobrenome};
};
const p1 = criaPessoa('Gustavo', 'Ponte');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};

console.log(p1);
console.log(p2);
console.log('#######');

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!')
console.log(resto);
// ESSA FUNÇÃO DENTRO DE OUTRA FUNÇÃO NORMALMENTE É USADA DA SEGUINTE FORMA...
/*
function duplica(n) {
    return n * 2;
}
function triplica(n) {
    return n * 3;
}
function quadriplica(n) {
    return n * 4;
}
*/
// PODE SER FEITO ASSIM...
function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
