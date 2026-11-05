
const readlineSny=require('readline-sync')

quantCompradas=1000/32.87;
acaoCompradas=1000*32.87;
taxaCompras=acaoCompradas*2/1000;
acoesCompradaDois=1000*33.92;
taxaComprasDois=acaoCompradasDois*2/100;



console.log(`A quantia que José pagou pelas ações : ${acaoCompradas} R$`);
console.log(`O valor da comissão que José pagou ao seu corretor quando ele comprou as ações : ${taxaCompras} R$`);
console.log(`A quantia pela qual José vendeu as ações : ${acaoCompradasDois}R$`);
console.log(` A quantia de comissão que José pagou ao seu corretor quando ele vendeu as ações : ${taxaComprasDois} R$`)
console.log(`A quantidade de ações compradas : ${quantCompradas} R$`)













/*12. Negociação de Ações – No mês passado, José comprou e vendeu algumas ações 
das Lojas Pedroso S.A., conforme detalhado abaixo:  
a. No total, foram compradas 1000 ações. Naquele momento, José pagou 
R$ 32,87 por cada ação; 
b. Pela transação que efetuou, José teve que pagar uma taxa de corretagem 
de 2% sobre o valor pago pelas ações; 
c. Duas semanas depois, José vendeu todas as ações que adquirira por R$ 
33,92 cada uma; 
d. Para poder efetuar a venda, José teve que pagar novamente uma 
comissão de 2% do valor da transação. 
Crie um algoritmo que imprima na tela as seguintes informações: 
a. A quantia que José pagou pelas ações; 
b. O valor da comissão que José pagou ao seu corretor quando ele comprou 
as ações; 
c. A quantia pela qual José vendeu as ações; 
d. A quantia de comissão que José pagou ao seu corretor quando ele vendeu 
as ações; 
e. Mostre a quantia que José ganhou ao vender as ações e pagar o corretor. 
Modificação: Após construir esse algoritmo, modifique-o para que o usuário possa 
fornecer as seguintes informações: 
a. A quantidade de ações compradas; 
b. O valor de cada ação no momento da compra; 
c. O valor percentual da comissão na compra; 
d. O valor de cada ação no momento da venda; 
e. O valor percentual da comissão na venda. 
A partir disso, imprima na tela as mesmas informações como pedido acima. 
*/