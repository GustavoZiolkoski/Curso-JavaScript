// CALCULADORA
function criaCalculadora() {
    return {
        // ATRIBUTOS
        display: document.querySelector('.display'),

        // MÉTODOS
        inicia: function() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },
        pressionaEnter() { // Para fazer o botão funcionar clicando enter.
            this.display.addEventListener('keyup', e => { // Utilizando arrow function para ele saber que é esse this que vou usar...
                if(e.keyCode === 13)
                this.realizaConta();
            })
        },
        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta); // Para fazer os calculos, usando a função eval
                
                if(!conta) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value =  conta;
            } catch(erro) {
                alert('Conta inválida');
                return;
            }
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1); // 0 é o tamanho da string e -1 é o que vai tar dela.  
        },

        clearDisplay() {
            this.display.value = '';
        },

        cliqueBotoes() {
            // this -> calculcadora
            document.addEventListener('click', function(e) {
                const el = e.target;
                console.log(this);

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText); // Se quiser fazer referência de uma chave de dentro de um objeto, é obrigado usar o this para isso.
                }
                
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }



            }.bind(this)); // Para fazer o computador entender que é esse this que deve ser usado.
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();