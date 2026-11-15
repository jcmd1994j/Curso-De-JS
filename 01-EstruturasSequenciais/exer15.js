const  readlineSync=require('readline-sync')

const cookies=Number(readlineSync.question('Quantos cukies você vai fazer?'))


const acucar=1.5*cookies;
const mateiga=1*cookies;
const farinha=2.75*cookies;

console.log( `Pra fazer ${cookies} unid`)
console.log( `Precisa de ${acucar} açucar`)
console.log( `Precisa de ${mateiga} mateiga`)
console.log( `Precisa de ${farinha} farinha`)






/*15. Ajustador de Ingredientes – Uma receita de biscoito exige os seguintes 
ingredientes para produzir 48 unidades: 
a. 1,5 xícaras de açúcar 
b. 1 xícara de manteiga 
c. 2,75 xícaras de farinha 
Crie um algoritmo que pergunte ao usuário quantos cookies ele deseja fazer e 
calcule a quantidade correspondente dos ingredientes.  
Exemplo: as quantidades listadas servem para fazer 48 unidades. Se o usuário 
quisesse produzir 96 unidades (ou seja, o dobro de 48) as quantidades dos 
ingredientes devem ser dobradas: 3 xícaras de açúcar, 1 xícara de manteiga e 4,5 
xícaras de farinha. 
*/