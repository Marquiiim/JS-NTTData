/* 
    O IMC - ÍNDICE DE MASSA CORPORAL É UM CRITÉRIO DA ORGANIZAÇÃO MUNDIAL DA SAÚDE PARA DAR UMA INDICAÇÃO SOBRE A CONDIÇÃO DE PESO DE UMA PESSOA ADULTA.

    IMC = peso / (altura * altura)

    CLASSIFICAÇÃO:

    - ABAIXO DE 18.5 ABAIXO DO PESO;
    - ENTRE 18.5 E 25 PESO NORMAL;
    - ENTRE 25 E 30 ACIMA DO PESO;
    - ENTRE 30 E 40 OBESO;
    - ACIMA DE 40 OBESIDADE GRAVE;
*/

const weight = 90;
const height = 1.82;

const imc = weight / (height * height);

if (imc < 18.5) {
    console.log("Você está abaixo do peso!")
} else if (imc >= 18.5 && imc < 25) {
    console.log("Você está com peso normal!")
} else if (imc >= 25 && imc < 30) {
    console.log("Você está acima do peso!")
} else if (imc >= 30 && imc < 40) {
    console.log("Você está obeso!")
} else if (imc > 40) (
    console.log("Você está com obesidade grave!")
)
