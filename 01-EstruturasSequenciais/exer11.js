const readlineSync=require('readline-sync')

const celcisGraus=Number(readlineSync.question('Quantos graus está fazendo?'))

const calculoFormulaCelsios=9*5/celcisGraus+32;
const calculoFormulafAH=9*5/celcisGraus-32;


console.log(`Valor convertido de celsius para Fahrenheit: ${calculoFormulaCelsios} graus`)
console.log(`Valor Fahrenheit para Celsios: ${calculoFormulafAH} graus`)





/*11. Conversão de graus Celsius para Fahrenheit – Crie um algoritmo que converta 
graus Celsius em Fahrenheit. A fórmula é a seguinte: 
�
� =9 5⁄ 𝐶+32 
O programa deve solicitar ao usuário que insira uma temperatura em graus 
Celsius e, em seguida, exiba a temperatura convertida em Fahrenheit. 
Modificação: após construir esse algoritmo, modifique-o para que converta 
graus Fahrenheit em graus Celsius.  
*/