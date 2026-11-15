const  readlinesync=require('readline-sync')
const terra=Number(readlinesync.question('Qual o valor de terra em metros quadrados ?'))



calculoacreTerra=4.04686*terra;
calculoPes=43.560*terra;
calculoacreHacteres=0.404686*terra;

console.log(`Valor de acre em Terra em m²:${calculoacreTerra}`)
console.log(`Valor de Pés em Terra em m²:${calculoPes}`)
console.log(`Valor de Hacteres em Terra em m²:${calculoacreHacteres}`)



























/*5. Conversor de áreas de terra – Um acre de terra é equivalente a 4.046,86 m2, a 
43.560 ft2 (pés quadrados) e a 0,404686 hectares. Crie um algoritmo que solicite 
ao usuário que informe a área de um terreno em metros quadrados e mostre as 
áreas correspondentes em acres, pés quadrados e hectares. 
*/