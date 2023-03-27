// ESTRUTURA DE REPETIÇÃO

// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// for (criar uma variável; criar uma condição; incrementar ou decrementar).

// for (let i = 0; i <= 500; i += 20) {
//     console.log(`Linha ${i}`);
// };

// for (let i = 0; i <= 10; i ++) {
//     const par = i % 2 === 0 ? 'Par' : 'Ímpar';
//     console.log(i, par);
// };

//                 0       1      2
const frutas = ['Maçã', 'Pera', 'Uva', 'Abacaxi', 'Goiába', 'Laranja', 'Melão'];
// console.log(frutas.length); // Quantidade de elementos.
for (let i = 0; i < frutas.length; i ++) {
    console.log(`Índice ${i}`, frutas[i]);
};