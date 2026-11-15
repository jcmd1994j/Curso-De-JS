const readlineSync=require('readline-sync')
const milhas =Number(readlineSync.question('Quantas milhas você percorreu?'))






const polegadas = 63360*milhas;
const pes =5260*milhas;
const jardas= 2025.37 *milhas;








/*17. Conversão de unidades (milhas para polegadas, pés e jardas) – Escreva um 
algoritmo que utilize constantes para armazenar o número de polegadas, pés e 
jardas contidas em uma milha (procure essas informações na Internet). Com 
essas constantes, esse algoritmo deve pedir ao usuário que informe uma certa 
distância em milhas e a converta para polegadas, pés e jardas, as quais devem 
ser exibidas junto a um texto explicativo. 
*/ 