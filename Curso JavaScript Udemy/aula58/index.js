// Funções Contrutoras (constructor functions) -> Retorna Objetos
// Construtora -> É obrigatório escrever com letra maiúscula ex: Pessoa (new). É obrigatório usar a palavra new, por isso ela deve começar com letra maiúscula.
function Pessoa(nome, sobrenome) {
    // Pode criar variáveis privadas, pois não vão estar disponíveis fora do corpo do objeto.
    const ID = 123456;
    const MetodoInterno = function() {

    };

    // Atributos ou métodos público, pois pode acessar fora do corpo do objeto.
    this.nome = nome; // Pessoa.nome =
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}
// A PALAVRA NEW CRIA UM NOVO OBJETO VAZIO, FAZ A PALAVRA THIS APONTAR PARA O OBJETO QUE ESTÁ SENDO UTILIZADO E RETORNA IMPLICITAMENTE O OBJETO PARA ESSA VARIÁVEL. EX: new cria objeto -> this aponta para p1 e retorna o objeto para dentro da variável.
const p1 = new Pessoa('Gustavo', 'Ziolkoski');
const p2 = new Pessoa('Maria', 'Oliveira');

p2.metodo();