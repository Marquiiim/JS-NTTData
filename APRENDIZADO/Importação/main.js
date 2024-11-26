const { gets, print } = require('./funcoes-auxiliares')

const numeros = []

for (let i = 0; i < 5; i++) {
    const numero = gets()
    numeros.push(numero)
}

let maiorValor = 0

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i]
    if(numero > maiorValor) {
        maiorValor = numero
    }
}
