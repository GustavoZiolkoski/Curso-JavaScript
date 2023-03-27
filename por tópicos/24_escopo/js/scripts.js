// ESCOPO GLOBAL
var x = 1;

var y = 3;

console.log(x, y);


// ESCOPO LOCAL
function teste() {

    var z = 0;

    console.log(z);

    console.log(x);

}

teste();

/* Função z está no escopo local, portanto fora da function não se tem acesso a ela.

    console.log(z);

*/

teste();

function testando() {

    var z = 5;

    console.log(z);

}

testando();

if(true) {

    var p = 1;

}

console.log(p);