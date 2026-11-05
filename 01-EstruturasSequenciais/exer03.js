const readlineSync=require('readline-sync')

const nome=readlineSync.question('Qual é seu nome ?')
const endereco=readlineSync.question('Qual é seu Endereço,Cidade ,Estado,CP')
const telefone=readlineSync.question('Qual seu telefone ?')
const profissao=readlineSync.question('Qual sua atuação  profissional ?')

console.log(`Meu nome é : ${nome}`)
console.log(`Endereço Completo: ${endereco}`)
console.log(`Meu telefone é : ${telefone}`)
console.log(`Minha atuação profissonal é : ${profissao}`)













/*3. Informações Pessoais – Crie um algoritmo que peça ao usuário para informar os 
dados abaixo e, depois disso, os imprima na tela: 
• Nome; 
• Endereço, com cidade, estado e CEP; 
• Número de telefone; 
• Área de atuação profissional.
*/