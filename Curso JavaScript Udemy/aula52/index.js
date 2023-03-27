const nome = 'Gustavo';

function falaNome() { // Ele procura a função no escopo global, se esta não estiver na função.
    const nome = 'Luiz'; // Se na função foi declarada a variável, ele utiliza está e não a que está no escopo global.
    console.log(nome);
}
falaNome();

function usaFalaNome() {
    const nome = 'Ponte'; // Ele não vai utilizar essa função, mas sim a que está declarada na função anterior ou a que está declarada no escopo global.
    falaNome();
}
usaFalaNome();