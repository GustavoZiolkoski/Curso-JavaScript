const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o número 2');
        continue; // Ele vai até o final
    }
    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break; // Ele não executa mais nada, quando encontra o break
    }
};

console.log('#######');

for (let i in numeros) {
    let numero = numeros[i];
    if (numero === 2) {
        console.log('Pulei o número 2');
        continue; // Ele vai até o final
    }
    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break; // Ele não executa mais nada, quando encontra o break
    }
};

console.log('#######');

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (numero === 2) {
        console.log('Pulei o número 2');
        continue; // Ele vai até o final
    }
    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break; // Ele não executa mais nada, quando encontra o break
    }
};

console.log('#######');

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];
    if (numero === 2) {
        console.log('Pulei o número 2');
        i++;
        continue; // Ele vai até o final
    }
    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        i++
        break; // Ele não executa mais nada, quando encontra o break
    }
    i++;
};

console.log('#######');

//let i = 0; já está declarada acima
do {
    let numero = numeros[i];
    if (numero === 2) {
        console.log('Pulei o número 2');
        i++;
        continue; // Ele vai até o final
    }
    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        i++
        break; // Ele não executa mais nada, quando encontra o break
    }
    i++;
} while (i < numeros.length);