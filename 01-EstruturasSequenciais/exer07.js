const readlineSync=require ('readline-sync')

const distancia=Number(readlineSync.question("Qual distância que o carro está andando?"))




calculo5horas= distancia*5;
calculo8horas= distancia*8;
calculo12horas= distancia*12;


console.log( `A distância que o carro percorrerá em 5 horas : ${calculo5horas} horas.`) 
console.log( `A distância que o carro percorrerá em 8 horas  : ${calculo8horas} horas .`) 
console.log( `A distância que o carro percorrerá em 12 horas  : ${calculo12horas} horas .`) 























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