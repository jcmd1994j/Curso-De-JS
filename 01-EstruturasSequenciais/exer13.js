const readlineSync=require('readline-sync')

const bisc=Number(readlineSync.question('Quantos biscoitos você comeu cara ?'))

const calorias=bisc*300;

console.log(`Calorias obtidas :${calorias} calorias`)










/*13. Calorias dos Biscoitos – Um saco de biscoitos contém 40 unidades que, de 
acordo com as informações do rótulo, equivalem a 10 porções. Ainda de acordo 
com o rótulo, uma porção possui 300 calorias. Baseado nessas informações, crie 
um algoritmo que permita ao usuário inserir o número de biscoitos que ele 
consumiu e imprima na tela a quantidade de calorias correspondentes.
*/