// Funções fábrica -> Factory functions (funçoes que retornam objetos)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        // Getter
        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`;
            
        },
        
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' '); // Para transformar o nome em array
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },


        fala: function(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`; // O this vai ser sempre quem chamar o objeto.
        },
        altura,
        peso,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2); // Para retornar só duas casas decimais.
        }
    };
}

const p1 = criaPessoa('Gustavo', 'Ziolkoski', 1.83, 82);
/*
console.log(p1.fala('falando sobre JS')); // Nesse caso o p1 está chamando o objeto. Ele é o this.
console.log(p1.imc());
const p2 = criaPessoa('Maria', 'Joaquina', 1.60, 55);
console.log(p2.fala('falando sobre JS')); // Nesse caso o p2 está chamando o objeto. Ele é o this.
console.log(p2.imc());
*/
/*
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc); // Pra pegar o número sem executar a função, tem que colocar get, antes da variável que vc quer o valor.
*/
console.log(p1.nome + ' ' + p1.sobrenome);
console.log(p1.nomeCompleto); // Utilizando um método para dar a mesma resposta, usando get também
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.sobrenome);
console.log(p1.fala());


// COnstructor function (Função construtora)