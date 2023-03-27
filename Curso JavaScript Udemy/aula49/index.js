// Todas essas funções são tratadas como objetos de primeira classe.
// Declaração de função (Function hoisting) // NÃO FAZ DE DIFERENÇA SE CHAMAR A FUNÇÃO ANTES OU DEPOIS DE TER DECLARADO ELA.
falaOi();
function falaOi() {
    console.log('Oie');
}
falaOi();
console.log('#####')
// First-class objects (Objetos de primeira classe)
// Function expression // CRIA UMA VARIÁVEL E JOGAR A FUNÇÃO DENTRO DELA
const souUmDado = function () {
    console.log('Sou um dado.');
};
souUmDado();

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();
}
executaFuncao(souUmDado);
console.log('#####')
// Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();
console.log('#####')
// Dentro de um objeto
const obj = {
    falar: function () {
        console.log('Estou falando...');
    }
};
obj.falar();
