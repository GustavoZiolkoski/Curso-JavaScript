// new Date(0);
function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000); // Ele está em milésimo de segundos, então deve ser multiplicado por mil.
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    };
    
    
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000); // A cada segundo que passa essa função vai se atualizar e somar 1 a mais nos segundos.
    }
    
    document.addEventListener('click', function(e) { // Com isso pode ser feito o código bem mais simples, dentro de uma só função usando if.
        const el = e.target;
    
        // console.log(e.target); // Serve para mostra no console dentro do inspecionar do navegador em qual local está sendo clicado.
        if(el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado'); // Remove a cor vermelha da class pausado do css.
            clearInterval(timer);
            iniciaRelogio();
        }

        if(el.classList.contains('pausar')) {
            if (segundos !== 0) {relogio.classList.add('pausado'); // Adiciona a cor vermelha da class pausado do css. // if (segundos !== 0) {relogio.classList.add('pausado'); - **EU QUE FIZ**, para não deixar o relógio vermelho, ao clicar no zerar.
        }
            clearInterval(timer);
        }

        if(el.classList.contains('zerar')) {
            relogio.classList.remove('pausado'); // Remove a cor vermelha da class pausado do css.
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    });
}
relogio();

// MÉTODO MAIS LONGO
/*
iniciar.addEventListener('click', function(event) {
        relogio.classList.remove('pausado'); // Remove a cor vermelha da class pausado do css.
        clearInterval(timer);
        iniciaRelogio();
    });
    
    pausar.addEventListener('click', function(event) {
        relogio.classList.add('pausado'); // Adiciona a cor vermelha da class pausado do css.
        clearInterval(timer);
    });
    
    zerar.addEventListener('click', function(event) {
        relogio.classList.remove('pausado'); // Remove a cor vermelha da class pausado do css.
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    });
*/