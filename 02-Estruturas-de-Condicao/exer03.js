const readlineSync=require('readline-sync')

const produto=Number(readlineSync.question('Qual valor do produto ?'))

const calculo45=1.45;
const calculo30=1.30;

if( produto <  50 ){
console.log(`Valor vendido 45 % maior:${calculo45 + produto}`)
}

else if(produto > 50 ){
console.log(`Valor vendido 30 % :${calculo30 + produto}`)
}









/*3. Um brechó revende produtos usados, e fixa o preço de venda de cada produto 
conforme o valor de sua aquisição: se o preço de aquisição de um produto é menor 
do de R$ 50.00, ele deve ser vendido por um preço 45% maior; caso contrário, o 
lucro será de 30%. Sabendo disso, construa um algoritmo que leia o valor de 
aquisição de um produto e mostre o seu valor de venda. 
*/

