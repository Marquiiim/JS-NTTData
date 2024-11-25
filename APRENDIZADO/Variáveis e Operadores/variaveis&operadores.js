// Cálculo de valor de uma viagem (1° Módulo de Variáveis de Operadores)

/*
FAÇA UM PROGRAMA PARA CALCULAR O VALOR DE UMA VIAGEM.

VOCÊ TERÁ 3 VARIÁVEIS. SENDO ELAS:

1 - PREÇO DO COMBUSTÍVEL;
2 - GASTO MÉDIO DE COMBUSTÍVEL DO CARRO POR KM;
3 - DISTÂNCIA EM KM DA VIAGEM;

IMPRIMA NO CONSOLE O VALOR QUE SERÁ GASTO DE COMBUSTÍVEL PARA REALIZAR ESTA VIAGEM.
*/

/*
POSSÍVEL CONTA(ERRADA)
5.79 - 10
100  -  x

#--------------#

5.79x = 1000

x = 1000 => 172,7
    ----
    5.79
*/

const priceFuel = 5.79;
const averageSpendKm = 1;
const distance = 100;


const litersConsumed = distance / averageSpendKm
const amountSpent = litersConsumed * priceFuel

// toFixed() - MÉTODO PARA TRANSFORMAR/ARREDONDAR NÚMERO QUE SAI NO *CONSOLE**(NESTE CASO)*
console.log(amountSpent.toFixed(2))