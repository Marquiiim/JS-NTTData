/* 
    CÓDIGO CONDIÇÃO DE PAGAMENTO:
    1 - Á VISTA DÉBITO, RECEBE 10% DE DESCONTO;
    2 - Á VISTA NO DINHEIRO OU PIX, RECEBE 15% DE DESCONTO;
    3 - EM DUAS VEZES, PREÇO NORMAL DE ETIQUETA SEM JUROS;
    4 - ACIMA DE DUAS VEZES, PREÇO NORMAL DE ETIQUETA MAIS JUROS DE 10%;

    DESESTRUTURANDO ALGORÍTIMO PARA FUNÇÃO.
*/

function paymentMethod(method, price) {
    if (method === 1) {
        const debit = price - (price * 0.1)
        console.log(debit)

    } else if (method === 2) {
        const theView = price - (price * 0.15)
        console.log(theView)

    } else if (method === 3) {
        const creditTwo = price
        console.log(creditTwo)

    } else if (method === 4) {
        const aboveTwo = price + (price * 0.1)
        console.log(aboveTwo)
    }
}

paymentMethod(2, 100)
