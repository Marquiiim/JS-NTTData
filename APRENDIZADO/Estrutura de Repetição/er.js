const notas = []

notas.push(1)
notas.push(4)
notas.push(5)

let soma = 0

for (let i = 0; i < notas.length; i++) {
    const sPMedia = notas[i]
    soma = soma + sPMedia
}

const media = soma / notas.length
console.log(media)