// Incremento do cálculo de valor de uma viagem (2° Módulo de Estruturas Condicionais)

/*
FAÇA UM PROGRAMA PARA CALCULAR O VALOR DE UMA VIAGEM.

VOCÊ TERÁ 3 VARIÁVEIS. SENDO ELAS:
1 - PREÇO DO ETANOL;
2 - PREÇO DA GASOLINA;
3 - O TIPO DE COMBUSTÍVEL QUE ESTÁ NO SEU CARRO;
4 - GASTO MÉDIO DE COMBUSTÍVEL DO CARRO POR KM;
5 - DISTÂNCIA EM KM DA VIAGEM;

IMPRIMA NO CONSOLE O VALOR QUE SERÁ GASTO PARA REALIZAR ESTA VIAGEM.
*/

const ethanol = 4.04;
const gasoline = 6.10;

const typeFuelMyCar = ethanol
const averageSpendKm = 10;

const distanceKm = 100

if (typeFuelMyCar === gasoline) {
    const calc = (distanceKm / averageSpendKm) * gasoline

    console.log(`O gasto realizado utilizando Gasolina Comum será de ${calc.toFixed(2)}.`)

} else if (typeFuelMyCar === ethanol) {
    const calc = (distanceKm / averageSpendKm) * ethanol

    console.log(`O gasto realizado utilizando Etanol será de ${calc.toFixed(2)}.`)
}