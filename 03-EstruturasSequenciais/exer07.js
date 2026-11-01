const readlineSync=require('readline-sync')

const velocidade=Number(readlineSync.question("Qual foi a sua velocidade ?"))


distancia5horas=velocidade*5;
distancia8horas=velocidade*8;
distancia12horas=velocidade*12;


console.log(`Valor de 5 horas percorrido ${distancia5horas} km/h`);
console.log(`Valor de 8 horas percorrido ${distancia8horas} km/h`);
console.log(`Valor de 12 horas percorrido ${distancia12horas} km/h`);
























/*7. Distância percorrida por um automóvel – Supondo que não haja acidentes ou 
atrasos, a distância que um automóvel percorre numa rodovia pode ser 
calculada com a seguinte fórmula:  
Distância = velocidade × tempo 
Sabendo disso, construa um algoritmo em que o usuário possa informar a 
velocidade em que um carro está viajando e exiba as seguintes informações: 
• A distância que o carro percorrerá em 5 horas; 
• A distância que o carro percorre em 8 horas; 
• A distância que o carro percorrerá em 12 horas.
*/