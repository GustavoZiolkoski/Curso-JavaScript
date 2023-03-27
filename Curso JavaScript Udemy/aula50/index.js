// Argumentos que sustenta todos os argumentos enviados
function funcao (a, b, c, d, e, f) {
    //console.log(arguments[3]);
    /*
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
    */
   console.log(a, b, c, d, e, f);

    
}
funcao(1, 2, 3); 
// funcao(1, 2, 3, 4, 5, 6, 7); // Se inserir o valor por aqui, dentro ele será inserido dentro da função como um objeto, o qual aparece utilizando a palavra arguments, podendo ser selecionado com um array, da seguinte forma... arguments[0];

function soma(a, b = 2, c = 4) { // Também pode ser corrigido colocando o valor dentro do parenteses
    // b = b || 0; // Se B tiver algum valor coloque o valor, senão coloca zero.
    console.log(a + b + c); 
}
soma(2, 10); // Mesmo tendo o valor dentro da função, o valor a ser assumido será esse declarado do lado de fora da função. soma(2, 10);

soma(2, undefined, 10); // Se quiser assumir o valor padrão do meio do caminho, é obrigatório colocar undefined nele.

function objeto({ nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
objeto({ nome: 'Luiz', sobrenome: 'Otávio', idade: 20});

console.log('########');

const conta = function(operador, acumulador, ...numeros) { // Colocando os três pontinhos, é o rest operator, ele vai pegar todo o resto e jogar dentro dele. ELE SEMPRE TEM QUE SER O ÚLTIMO PARÂMETRO.
    for(let numero of numeros) { // IN retorna os indices, OF retorna os valores de dentro dos números.
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
conta('+', 0, 20, 30, 40, 50);