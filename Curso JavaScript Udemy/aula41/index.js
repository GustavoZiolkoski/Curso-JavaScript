// Escreva uma função que recebe 2 números e retorne o maior deles

function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
console.log(max(3, 8));

function max2(x, y) {
    return x > y ? x : y;
}
console.log(max2(12, 8));

const max3 = (x, y) => x > y ? x : y;
console.log(max3(10, 5));
