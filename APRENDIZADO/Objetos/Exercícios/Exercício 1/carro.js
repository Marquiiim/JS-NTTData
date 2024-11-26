/*
    CRIE UMC CLASSE PARA REPRESENTAR CARROS.
    OS CARROS POSSUEM UMA MARCA, UMA COR E UM GASTO MÉDIO DE COMBUSTÍVEL POR KM RODADO.
    CRIE UM MÉTODO QUE DADO A QUANTIDADE DE KM E O PREÇO DO COMBUSTÍVEL NOS DÊ O VALOR GASTO EM REAIS PARA REALIZAR ESTE PERCURSO.
*/

class Car {
    mark;
    color;
    kmPerLiter;

    constructor(mark, color, kmPerLiter) {
        this.mark = mark
        this.color = color
        this.kmPerLiter = kmPerLiter
    }

    calc(distance, priceFuel) {
        return distance * this.kmPerLiter * priceFuel
    }
}

const palio = new Car('Fiat', 'Azul', 1 / 12)

console.log(palio.calc(70, 5))