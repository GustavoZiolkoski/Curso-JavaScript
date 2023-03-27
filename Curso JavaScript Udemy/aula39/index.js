function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

// PRIMEIRO CHECA A CONDIÇÃO E DEPOIS EXECUTA O CÓDIGO
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('########');

// PRIMEIRO EXECUTA O CÓDIGO E DEPOIS CHECA A CONDIÇÃO
do {
    rand = random(min, max); // Nesse caso, essa função alterou o número que era 10 antes mesmo de ser checada a condição.
    console.log(rand);
} while(rand !== 10);

/*
const nome = 'Luiz';

let i = 0;

while (i <= nome.length) {
    console.log(nome[i]);
    i++;
};
*/
/*
let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
};
*/