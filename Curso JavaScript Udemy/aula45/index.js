function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new Error('Esperando instãncia de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

const data = new Date('01-01-1970'); 
const hora = retornaHora();
console.log(hora);

/*
try {
    // É executada quando não há erros.
} catch (erro) {
    // É executada quando há erros.
} finally { // Nem sempre é usado.
    // É executado sempre.
}
*/
/*
// SEM ERRO
try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch (erro) {
    console.log('Tratando o erro');
} finally { // Nem sempre é usado.
    console.log('FINALLY: Eu sempre sou executado');
}

console.log('##########');
// COM ERRO
try {
    console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch (erro) {
    console.log('Tratando o erro');
} finally { // Nem sempre é usado.
    console.log('FINALLY: Eu sempre sou executado');
}
*/
/*
function retornaHora(data) {
    if (!(data instanceof Date)) {
        console.log('Não é');
    }
}

retornaHora(new Date()); // Nesse caso não vai retornar nada
retornaHora(11);
*/

  