/*
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

DESESTRUTURANDO CÓDIGO PARA ENCAIXAR NA FUNÇÃO.
*/

function IMC(weight, height) {
    return weight / (height * height)
}

function classificationIMC(imc) {
    if (imc < 18.5) {
        return "Você está abaixo do peso!"
    } else if (imc >= 18.5 && imc < 25) {
        return "Você está com peso normal!"
    } else if (imc >= 25 && imc < 30) {
        return "Você está acima do peso!"
    } else if (imc >= 30 && imc < 40) {
        return "Você está obeso!"
    } else if (imc > 40) {
        return "Você está com obesidade grave!"
    }
}

function main() {
    const weight = 90;
    const height = 1.82;
    const imc = IMC(weight, height)
    console.log(classificationIMC(imc))
}

main()
