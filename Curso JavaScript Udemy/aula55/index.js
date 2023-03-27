// Funções Imediatas -> IIFE -> Immediately invoked function expression
(function() { // ESSA FUNÇÃO É A MESMA QUE A DE BAIXO, SÓ QUE NÃO POSSUI NOME E JÁ FOI INVOCADA PELOS () DO FINAL.
    const nome = 'Luiz';
    console.log(nome);
})();
const nome = 'Qualquer coisa';
/*
function qualquerCoisa() {
    console.log(11123455);
}
qualquerCoisa();
*/

(function(idade, peso, altura) {
    const sobrenome = 'Ziolkoski';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Gustavo'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(26, 82, 1.83); // São os dados declarados lá no início...