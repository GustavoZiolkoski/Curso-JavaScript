console.log(this); // tudo que esta no script consta na janela do this

var teste = 5;

console.log(this.teste); // sendo referenciada ao objeto global da window
console.log(teste);

let pessoa = {
    nome: "Gustavo",
    idade: 26,
    falar: function() {
        console.log("Olá, tudo bem?");
    },
    dizerNome: function() {
        console.log("O meu nome é " + this.nome);
    },
    aniversario: function() {
        this.idade += 1;
    },
    saudacao: function() {
        return 'Sr. ' + this.nome;
    }
}

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();

console.log(pessoa.idade);

console.log(pessoa.saudacao());

var sdc = pessoa.saudacao();

console.log("Olá " + sdc);
