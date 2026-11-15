const readlineSync=require('readline-sync')

const notbook=Number(readlineSync.question('Qual valor desse notbook?'))
const mouse =Number(readlineSync.question('Qual valor desse mouse?'))
const secador=Number(readlineSync.question('Qual valor desse secador?'))
const chapinha =Number(readlineSync.question('Qual valor dessa chapinha?'))
const malainteligente=Number(readlineSync.question('Qual valor dessa mala inteligente?'))

calculoSubtotal=notbook+mouse+secador+chapinha+malainteligente;
calculoImposto6=calculoSubtotal*6/100;
calculoTotal=calculoSubtotal+calculoImposto6;

console.log(`Notbook: ${notbook} $`)
console.log(`Mouse: ${mouse} $`)
console.log(`secador: ${secador} $`)
console.log(`chapinha: ${chapinha} $`)
console.log(`Mala inteligente : ${malainteligente} $`)


console.log(`subtotal de venda :${calculoSubtotal} $`)
console.log(`Imposto da  venda :${calculoImposto6} %`)
console.log(`total de venda :${calculoTotal} $`)









/*6. Valores de uma Compra – Um cliente de uma loja está comprando cinco 
produtos. Crie um algoritmo que solicite o preço de cada um desses produtos e, 
em seguida, exiba o subtotal da venda, o valor do imposto e o valor total 
(subtotal da venda mais o valor do imposto). Suponha que a alíquota do imposto 
seja de 6% sobre o subtotal da venda.
*/