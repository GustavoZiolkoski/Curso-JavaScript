const frutas = ['Pera', 'Maçã', 'Uva'];

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

// NESSE CASO ELE ESTÁ ACESSANDO AS CHAVES DO OBJETO
for (let chave in pessoa) {
    console.log(chave);
}
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}


// NESSE CASO ELE ESTÁ LENDO O ÍNDICE
/*
for (let i in frutas) {
    console.log(i);
}
for (let indice in frutas) {
    console.log(frutas[indice]);
}
*/
/*
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
};
*/