const readlineSync=require('readline-sync')

const primeiroNumero=Number(readlineSync.question('Qual primeiro número ?'))
const segundoNumero=Number(readlineSync.question('Qual segundo número ?'))



if(primeiroNumero > segundoNumero){
console.log(`O número ${primeiroNumero} é maior!`)
}
else if(segundoNumero > primeiroNumero) {
console.log(`O número ${segundoNumero} é maior !`)
}
if(primeiroNumero < segundoNumero){
console.log(`O número ${primeiroNumero} é menor!`)
}
else if(segundoNumero > primeiroNumero) {
console.log(`O número ${segundoNumero} é menor !`)
}

















/*2. Escreva um algoritmo que leia dois números fornecidos pelo usuário e, conforme
o valor deles, exiba uma das seguintes mensagens: “O primeiro número informado
é o maior”, “O segundo número é o maior” ou “Ambos os números são iguais”. 
*/

