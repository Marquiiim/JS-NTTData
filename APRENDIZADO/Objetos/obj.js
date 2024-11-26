class Atletas {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome,
            this.idade = idade
    }

    descricao() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} de idade e atualmente chego nos ${this.altura}m de altura`)
    }
}

const marquim = new Atletas('Marquim', 18)
const biel = new Atletas('Biel', 17)

function compart(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome}, é mais velha(o) que a(o) ${p2.nome}.`)
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome}, é mais velha(o) que a(o) ${p1.nome}.`)
    } else {
        console.log(`${p1.nome} e ${p2.nome}, tem a mesma idade.`)
    }
}

console.log(marquim)
console.log(biel)

compart(marquim, biel)


/*
const atleta = {
    nome: 'Marquim',
    idade: 18,
    altura: 1.84,
    posicao: 'Oposto',
    braco: 'Destro',

    apresentacao: function () {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} de idade e atualmente chego nos ${this.altura}m de altura`)
    }
}

atleta.apresentacao()
console.log(atleta['posicao'])
console.log(atleta)
*/


