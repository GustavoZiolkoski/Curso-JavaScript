//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000; //Segundos * Segundos * Horas * Milisegundos
//const data = new Date(0 + tresHoras - umDia); //Se colocar 0 após o Date, era pra aparecer 01/01/1970 Timestamp unix ou época unix, mas possui 3 horas do fuso horário.
//const data = new Date(2019, 3, 20, 15, 14, 27, 999); //Ano, mês, dia, horas, minutos, segundos, milesimos de segundos(Ele não aparece mas se for 1000, ele automáticamente altera os segundos.)
/*
const data = new Date('2019-04-20 20:15:50.100');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()+1);//Se quiser o mês atual, precisa colocar +1, pq ele começa com 0.
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());//0 - Domingo, 6 - Sábado.
console.log(data.toString());
*/
//console.log(Date.now());
function zeroAEsquerda (num) { //Para adicionar o zero a esquerda nas datas e horas.
    return num >= 10 ? num : `0${num}`;
}


function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData (data);
console.log(dataBrasil);