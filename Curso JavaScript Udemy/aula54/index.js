// Funções de callback -> Funções que são executadas, quando uma ação finaliza.
function rand(min = 1000, max = 3000) { // FUNÇÃO PARA GERAR UM NÚMERO ALEATÓRIO
    const num = Math.random() * (max - min) + min;
    console.log(num);
    return Math.floor(num); // Para retirar as casas decimais do número.
};
console.log(rand());

function f1(callback) {
    setTimeout(function() {
    console.log('f1');
    if (callback) callback(); // SE HOUVER CALLBACK, EXECUTA O CALLBACK INDEPENDENTE DO QUE ELE FIZER...
    }, rand());
}
function f2(callback) {
    setTimeout(function() {
    console.log('f2');
    if (callback) callback();
    }, rand());
}
function f3(callback) {
    setTimeout(function() {
    console.log('f3');
    if (callback) callback();
    }, rand());
}

f1(f1Callback);
function f1Callback() {
    f2(f2Callback);
}
function f2Callback() {
    f3(f3Callback);
}
function f3Callback() {
    console.log('Olá mundo!');
}

/*
f1(function() {
    f2(function() {
        f3(function() {
            console.log('Olá Mundo!'); 
        });
    });
});
*/
/*
f1();
f2();
f3();
console.log('Olá Mundo!');
*/