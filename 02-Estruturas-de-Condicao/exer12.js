const readlineSync=require('readline-sync') 
const rg=Number(readlineSync.question('Qual seu Rg?'))
const nomeCao=readlineSync.question('Qual nome do seu cão?')
const raca=readlineSync.question('Qual a raça do seu cão?')
const idade=Number(readlineSync.question('Qual a idade do seu cão?'))
const peso=Number(readlineSync.question('Qual peso do seu cão?'))

if(peso <= 8 ){
console.log(`Você paga : 50 $`)
} 
else if(peso <= 8 && peso > 15){
console.log(`Você paga : 70 $`)
}
 else if(peso <= 15 && peso <= 40){
console.log(`Você paga : 100 $`)
}
else if(peso >= 40){
console.log(`Você paga : 125 $`)
}
console.log(`Idade do cão:${idade} `)
console.log(`RG do Proprietário :${rg} `)
console.log(`Nome do cão:${nomeCao} `)
console.log(`Raça do cão:${raca} `)
console.log(`Peso cão:${raca} `)




/*12. Um certo petshop também funciona como um hotel para cães. De acordo com a
tabela de preços desse estabelecimento, a taxa semanal para hospedagem é de R$
50.00 para cães com menos de 8 kg, R$ 70.00 para cães que pesem entre 8 e 15
kg inclusive, R$ 100.00 para cães entre 15 e 40 kg e R$ 125.00 para cães com
mais de 40 kg. Construa um algoritmo que leia o RG do proprietário de um cão,
bem como o nome, raça, idade e peso desse cão e, de posse desses dados, exiba
um orçamento contendo todos os dados de entrada e o custo para hospedar o
animal por uma semana.
*/
 