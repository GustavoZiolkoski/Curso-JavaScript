const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi () { // Para cria uma lista
    const li = document.createElement('li');
    return li; 
}

inputTarefa.addEventListener('keypress', function(e) { // Selecionar um tecla do teclado
    if (e.keyCode === 13) { //Utilizando o keyCode para adicionar a tecla enter com valor 13.
        if (!inputTarefa.value) return; // Não deixa criar o valor em branco ao clicar a tecla
        criaTarefa(inputTarefa.value); // Envia o valor adicionado ao clicar a tecla
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' '; // Para dar um espaço
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    // botaoApagar.classList.add('apagar'); Pode ser adicionado a classe das duas formas
    botaoApagar.setAttribute('class' , 'apagar'); // ('atributo = class', 'valor = apagar')
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li); // Cria uma lista com as tarefas adicionadas
    limpaInput();
    criaBotaoApagar(li);
    salvartarefas();
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return; // Para não carregar o valor se estiver em branco
    criaTarefa(inputTarefa.value); // Coloca o valor adicionado
});

document.addEventListener('click', function(e) {
    const el = e.target; // Para achar o botão clicado
    
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvartarefas(); // Para na hora que apagar ela na página, também será apagado dentro do Local Storage
    }
})

function salvartarefas() {
    const liTarefas = document.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // .trim(remove os espaços sobrando nas pontas)
        listaDeTarefas.push(tarefaTexto); // Para jogar as tarefas dentro do array
    }

    // JSON - Para salvar dados entre sistemas

    const tarefasJSON = JSON.stringify(listaDeTarefas); // Transformou o array em string, e agora pode ser salvo em algum lugar e pushar do lugar onde foi salvo, e até mesmo converter em array novamente
    localStorage.setItem('tarefas', tarefasJSON); // ('tarefas' = o nome para recuperar o valor de novo, 'tarefasJSON' o valor dele é esse);
    // O caminho do localStorage fica dentro do navegador em inspecionar > aplicattion (no mesmo lugar que fica o console) > Local Storage > file:/// (é uma mini base de dados)
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // Para converter novamente para um objeto JavaScript , se tornaram um array novamente.
    for (let tarefa of listaDeTarefas) { // Para deixar as tarefas salvas na página mesmo após carregar a página
        criaTarefa(tarefa); 
    }
}
adicionaTarefasSalvas();