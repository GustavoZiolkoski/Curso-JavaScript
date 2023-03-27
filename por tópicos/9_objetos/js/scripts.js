var obj = {
    nome: 'Gustavo',
    idade: '25',
    profissao: 'Estagiário',
    estaTrabalhando: true,
};

console.log(obj);

console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log('O meu nome é ' + obj.nome);

obj.nome = 'Pedro';

// Pode adicionar outra variável no objeto mesmo inserindo fora dele.
obj.graduacao = true;

console.log(obj.nome);

console.log(obj);