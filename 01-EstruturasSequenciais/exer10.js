
const readlineSync = require('readline-sync');

const refeicao = Number(readlineSync.question('Qual valor da refeicao? R$ '));



 const gorjeta=refeicao * 15 /100;
 const imposto=refeicao * 7 /100;
 const totalRefeicao=refeicao+gorjeta+imposto;

console.log(`Valor da refeição: ${refeicao} $`)
console.log(`Valor da gorjeta: ${gorjeta} $`)
console.log(`Valor do imposto : ${imposto} $ `)
console.log(`Valor total da refeição: ${totalRefeicao} $`)


























/*10. Gorjeta, Imposto e Total Pago por uma Refeição – Crie um algoritmo que peça 
para o usuário informar o valor de uma refeição num restaurante. A partir desse 
valor, o algoritmo deverá calcular o valor da gorjeta (15% sobre o valor da 
refeição), dos impostos (7% do valor da refeição) e o total a ser pago (valor da 
refeição mais os valores da gorjeta e dos impostos). Ao final, o algoritmo deverá 
exibir cada um desses valores e o total.
*/