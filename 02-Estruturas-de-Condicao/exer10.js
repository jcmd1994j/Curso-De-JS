const readlineSync=require('readline-sync')
const jogo=Number (readlineSync.question('Qual valor do jogo? 10 a 100?'))


const valorOriginal=jogo*150;
let desconto=0

if(jogo >= 10 && jogo <= 19){
 desconto=valorOriginal * 20 /100;
 console.log('Com :20% des.') 
}

else if(jogo >= 20 && jogo <= 49){
    desconto=valorOriginal * 30/100;
    console.log('Com :30% des.')
}
else if(jogo >= 50 && jogo <= 99){
    desconto=valorOriginal * 40 /100;
    console.log('Com :40% des.')
}
else if(jogo >= 100 ){
  console.log('Com :50% des.')  
  desconto=valorOriginal * 50 /100;


}

console.log(`Total de Jogos: ${jogo} jogos`)
console.log(`Valor original a pagar : ${valorOriginal} $`)
console.log(`Valor com desconto :${desconto} $`)









/*10. Uma loja de jogos vende cada jogo por R$ 150.00, mas concede descontos 
conforme a quantidade comprada, conforme a tabela a seguir: 
Quantidade de jogos comprados 
10–19 
Desconto 
20% 
20–49 
50 a 99 
30% 
40% 
100 ou mais 
50% 
Crie um algoritmo que leia o número de jogos comprados, o valor original da 
compra, o valor do desconto (se houver) e o valor total da compra após o desconto. 
*/
