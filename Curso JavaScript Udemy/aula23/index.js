/*
&& -> false && true -> false (quando for encontrada a expressão falsa não precisa ser checkado os demais valores, pois ja será dado como false).
FALSY
*false São considerados falsos os valores abaixo.
-> 0
-> '' "" ``
-> null / undefined
-> NaN
|| -> true || false -> vai retornar o valor verdadeiro.
*/
//function falaOi () {
//    return 'Oi';
//}
//const vaiExecutar = undefined;
//console.log(vaiExecutar && falaOi());
/*
console.log(0 || false || null || "Gustavo Ponte" || true);

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
*/

const a = 0;
const b = null;
const c = 'false'; //Aqui é uma string, avaliada como verdadeiro
const d = false;
const e = NaN;

console.log(a || b || c || d || e);