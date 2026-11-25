const readlineSync=require('readline-sync')
const massa=Number(readlineSync.question('Qual valor da massa em um objeto?'))

const peso=massa*9.8;

if(massa >= 1000){
console.log('Muito pesado!')
}
if(massa <= 10){
console.log('Muito leve !')
}
else{
  console.log('erro')
}
console.log(`${peso} Newtons`)







/*9. Os cientistas medem a massa de um objeto em quilogramas e seu peso em
newtons. O peso em Newtons de um objeto pode ser calculado a partir de sua
massa por meio da seguinte fórmula:
Peso = Massa × 9,8
Crie um algoritmo que leia a massa de um objeto e, em seguida, calcule seu peso.
Se o objeto pesar mais de 1.000 Newtons, exiba uma mensagem indicando que é
muito pesado. Se o objeto pesar menos de 10 Newtons, exiba uma mensagem
indicando que está muito leve.
*/