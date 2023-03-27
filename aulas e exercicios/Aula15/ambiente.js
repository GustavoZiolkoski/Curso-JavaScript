var num = [5,8,2,9,3]

/*Para adicionar no terceiro indice do vetor
num [3] = 6
*/
/* Para adicionar automaticamente no último indice do vetor
num.push(7)
*/
/*Para mostrar o comprimento do vetor
num.length
*/
/* Para colocar os números dos vetores em ordem crescente 
num.sort()
*/
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
/* Para localizar em que índice o número está */
let pos = num.indexOf(4)
if(pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
console.log(`O valor está na posição ${pos}`)
}