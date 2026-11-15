const readlineSync=require('readline-sync')

const venda=Number(readlineSync.question('Qual valor da venda ?'))

impostoEstadual=venda*4/100;
impostoMunicipal=venda*2/100;
valorTotal=venda+impostoEstadual+impostoMunicipal;

console.log(`Valor da venda ${venda} $ `)
console.log(`Valor do Imposto Estatual  ${impostoEstadual} %`)
console.log(`Valor da Imposto Municipal : ${impostoMunicipal} %`)
console.log(`Valor total das vendas : ${valorTotal} $`)












/*8. Imposto sobre vendas – Crie um algoritmo que solicite ao usuário que insira o 
valor da compra. O programa deve calcular os impostos de vendas estadual e 
municipal. Suponha que o imposto estadual sobre vendas seja de 4% e o imposto 
estadual sobre vendas seja de 2%. O programa deve exibir o valor da compra, o 
imposto estadual sobre vendas, o imposto municipal sobre vendas, o imposto 
total sobre vendas e o total da venda (que é a soma do valor da compra mais o 
imposto total sobre vendas).  
Lembrete: 2% = 2
 100
 =0,02 e 4% = 4
 100
 =0,04 
 */