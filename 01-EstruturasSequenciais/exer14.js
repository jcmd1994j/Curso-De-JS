const readlineSync=require('readline-sync')
const homens=Number(readlineSync.question('Quantos homens tem na sala ?'))
const mulheres=Number(readlineSync.question('Quantas mulheres tem na sala ?'))

const porctHomens=homens/mulheres;
const porctMulheres=mulheres/homens;

console.log(`Totaliza :${homens+mulheres} Alunos`)
console.log(`Totaliza % de homens :${porctHomens} %`)
console.log(`Totaliza % de mulheres  :${porctMulheres} %`)



/*14. Porcentagens de homens e mulheres numa sala de aula – Crie um algoritmo 
que solicite ao usuário que informe o número de homens e o número de 
mulheres matriculadas numa classe e exiba os percentuais equivalentes a cada 
sexo na tela. 
Exemplo: suponha que existam 8 homens e 12 mulheres em uma classe 
totalizando, portanto, 20 alunos na turma. A porcentagem de homens pode ser 
calculada como 8/20 = 0,4 ou 40% e a porcentagem de mulheres pode ser 
calculada  como 12/20 = 0,6  ou  60%.
*/