/* 
    ELABORE UM ALGORÍTIMO QUE CALCULE O QUE DEVE SER PAGO POR UM PRODUTO, CONSIDERANDO O PREÇO NORMA DE ETIQUETA E A ESCOLHA DA CONDIÇÃO DE PAGAMENTO.
    UTILIZE OS CÓDIGOS DA TABELA A SEGUIR PARA LER QUAL A CONDIÇÃO DE PAGAMENTO ESCOLHIDO E EFETUAR O CÁLCULO ADEQUADO.

    CÓDIGO CONDIÇÃO DE PAGAMENTO:
    1 - Á VISTA DÉBITO, RECEBE 10% DE DESCONTO;
    2 - Á VISTA NO DINHEIRO OU PIX, RECEBE 15% DE DESCONTO;
    3 - EM DUAS VEZES, PREÇO NORMAL DE ETIQUETA SEM JUROS;
    4 - ACIMA DE DUAS VEZES, PREÇO NORMAL DE ETIQUETA MAIS JUROS DE 10%;
*/

const priceProduct = 100;

const paymentMethod = 2;

if (paymentMethod === 1) {
    const debit = priceProduct - (priceProduct * 0.1)
    console.log(debit)

} else if (paymentMethod === 2) {
    const theView = priceProduct - (priceProduct * 0.15)
    console.log(theView)

} else if (paymentMethod === 3) {
    const creditTwo = priceProduct
    console.log(creditTwo)

} else if (paymentMethod === 4) {
    const aboveTwo = priceProduct + (priceProduct * 0.1)
    console.log(aboveTwo)
}