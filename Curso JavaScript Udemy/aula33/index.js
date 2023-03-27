const pessoa = {
    nome: 'Gusatavo',
    sobrenome: 'Ponte',
    idade: 26,
    endereco: {
        rua: 'Av Brasil',
        numero: '320'
    }
};

// console.log(pessoa.nome);
// const nome = pessoa.nome;
// console.log(nome);

//const { nome } = pessoa;
//console.log(nome);

// Atribuição via desestruturação

//const { endereco: {rua, numero}, endereco} = pessoa;
//console.log(rua, numero, endereco);

const { endereco: {rua: r = 12345, numero}, endereco} = pessoa; // Fazendo isso (rua: r = 12345), o valor da variável será exibido normalmente, exceto se ela não estiver declarada, nesse caso será atribuido esse valor mesmo (rua: r = 12345).
console.log(r, numero, endereco);