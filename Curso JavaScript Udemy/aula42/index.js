// Escreva um função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem;

// ARROW FUNCTION
const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1920, 1080));

/*
function ePaisagem(largura, altura) {
    return largura > altura;
}
console.log(ePaisagem(1920, 1080));
*/
/*
function ePaisagem(largura, altura) {
    return largura > altura ? true : false;
}
console.log(ePaisagem(1920, 1080));
*/
/*
function ePaisagem(largura, altura) {
    if (largura > altura) {
        return `true`
    } else {
        return `false`
    }
}
console.log(ePaisagem(12, 5));
*/