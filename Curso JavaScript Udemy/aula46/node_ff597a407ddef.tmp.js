function mostraHora() {
    let data = new Date();

    return data.toLocaleDateString('pt-BR', {
        hour12: false
    });
}

function funcaoInterval() {
    console.log((mostraHora));
}

setInterval(funcaoInterval, 1000); // Para executar a função, o 1000(equivale a 1 segundo) são milisegundos, a função ficará sendo executada automáticamente a cada 1 segundo.