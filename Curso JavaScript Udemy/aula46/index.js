function mostraHora() {
    let data = new Date();

    return data.toLocaleDateString('pt-BR', {
        hour12: false
    });
}


/*
const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000); // Para executar a função, o 1000(equivale a 1 segundo) são milisegundos, a função ficará sendo executada automáticamente a cada 1 segundo.

setTimeout(function() { // Essa função é utilizada para parar outra função, e o valor de 10000(10 segundos) milisegundos, é o tempo que a função vai esperar para parar a outra função.
    clearInterval(timer);
}, 10000);
*/
setTimeout(function() { // Ele está programado para após 5 segundos soltar a mensagem 'Olá Mundo!'.
    console.log('Olá mundo!');
}, 5000);