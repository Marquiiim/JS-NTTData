class Atletas {
    nome;
    idade;
    peso;
    altura

    constructor(nome, idade, peso, altura) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
    }

    imc() {
        return this.peso / (this.altura * this.altura)
    }

    imcClassification(imc) {
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
}

const marquim = new Atletas('Marquim', 18, 72, 1.84)
console.log(marquim)
console.log(marquim.imc())
console.log(marquim.imcClassification(marquim.imc()))