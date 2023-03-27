// Capturar evento de submit do formulário.
const form = document.querySelector('#formulario'); //Para capturar o formulário.

form.addEventListener('submit', function (evento) { //Adicionou um evento escutador que é o submit.
    evento.preventDefault(); //Previniu o default, para não deixar o formulário ser enviado
    const inputPeso = evento.target.querySelector('#peso'); //Capturou os dados dos inputs
    const inputAltura = evento.target.querySelector('#altura'); //Capturou os dados dos inputs

    const peso = Number(inputPeso.value); //Criou a variável e converteu para número.
    const altura = Number(inputAltura.value); //Criou a variável e converteu para número.

    if (!peso) { //Se o peso não for verdadeiro, irá dar como falso, indicando peso invalido.
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) { //Se a altura não for verdadeira, irá dar como falsa, indicando altura invalido.
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura); //Criou uma função específica para calcular o IMC.
    const nivelImc = getNivelImc(imc); //Criou uma função específica para calcular o nível do IMC.
    
    const msg = `Seu IMC é ${imc} (${nivelImc}).`; //Criou a mensagem com os valores.

    setResultado(msg, true); //Setou para colocar a msg como verdadeira.
});

function getNivelImc (imc) { //Função de nível do IMC.
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; //Criou um array para colocar as informações.
    //Fez a checagem de trás para frente, pois a medida que ele encontrar o resultado correto, ele ia parar automáticamente. E não será mais executada.
    if (imc >= 39.9) return nivel[5]; //Pode colocar dessa forma ou dentro de {}.
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];

}

function getImc (peso, altura) { //Criou a função IMC.
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () { //Função para criar um parágrafo.
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) { //Função que seta o resultado
    const resultado = document.querySelector('#resultado'); //Seleciona a div de resultado.
    resultado.innerHTML = ''; //Zera aquele resultado.
    
    const p = criaP();

    if (isValid) { //Se for verdadeira tem o fundo verde.
        p.classList.add('paragrafo-resultado');
    } else { //Se for falta tem o fundo vermelho.
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
};