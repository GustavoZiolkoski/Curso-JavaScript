const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função
// A VARIÁVEL LET NÃO PODE SER REDECLARADA, APENAS SERÁ REDECLARADA SE ESTIVER DENTRO DE UM BLOCO, QUE SERÁ AS DUAS CHAVES. ISSO JÁ NÃO É NECESSÁRIO PARA VAR.
/*
let nome = 'Luiz'; // Criando
var nome2 = 'Luiz';
// var nome2 = 'Gustavo'; // Redeclarada -> nesse caso ela não está sendo criada e sim redeclarada, mesmo se estiver dentro de um escopo.

if (verdadeira) {
    let nome = 'Otávio'; // Criando
    console.log(nome, nome2);
}
*/
/*
var sobrenome = 'Miranda';

function falaOi () {
    var nome = 'Luiz';
    console.log(sobrenome); // Se a variável não estiver dentro da função, ele tenta procurar ela, se encontrar ela vai mostrar a avariável encontrada.
    
    if (verdadeira) {
        console.log(sobrenome);
    }
}

// console.log(nome); -> SE COLOCAR O CONSOLE.LOG FORA DA FUNÇÃO ELE DIZ QUE A VARIÁVEL NÃO ESTÁ DEFINIDA, FUNCIONANDO APENAS DENTRO DA PRÓPRIA FUNÇÃO.
falaOi();
*/

console.log(sobrenome);

var sobrenome = 'Miranda'; // Ele diz que a variável é indefinida.
let sobrenome = 'Miranda'; // Ele da erro e diz que a variável não está definida.