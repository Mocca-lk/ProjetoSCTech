// let precoCompra = 200
// let desconto = 0.10
// function calcularDesconto (precoCompra, desconto) {
//     if (precoCompra < 100) {
//         let valorFinal = (precoCompra * desconto) - precoCompra
//     }
//      console.log(`O valor final é de R$ ${valorFinal}`) 
// }

const desconto_percentual = 0.10 //10% de desconto - const pra proteger o código de mudar o valor do desconto em outra linha sem querer

/**
 * 1 Valor de compra
 * 2- Valor paraa a função
 * 3 - Função identifica se o valor é menor ou maior que 100
 * 4- Se for maior retorna desconto
 * 5 - Exibe valor total a pagar
 */

function calcularValorTotal(valor_compra) {
    //Se o valor da compra for menor que 100,00 retorna apenas o valor da compra normal pra ela
    if (valor_compra <= 100) return valor_compra 
    //Aplicando desconto caso a compra seja maior que 100,00
    //Descobrindo o percentual de desconto em reais
    const desconto_reais = valor_compra * desconto_percentual
    //Retornando  o valor da compra com desconto já aplicado
    return valor_compra - desconto_reais

}
console.log(calcularValorTotal(200))