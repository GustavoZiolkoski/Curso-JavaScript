/*
try {
    console.log(naoExisto);
} catch (erro) {
    console.log('naoExisto não existe.');
    console.log(erro);
};
*/

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.');
    }
    return x + y;
}

try {
    console.log(soma(10, 3));
    //console.log(soma(10, '3'));    
} catch(error) {
    console.log(error)
    console.log('Alguma coisa mais amigável para o usuário.')
}
