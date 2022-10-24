function calcular(){
    const despesa = 200
    let lucro
    let quant = 120
    let maiorLucro = 0

    for(let preco=5; preco>=1; preco = preco - 0.5){
        lucro = preco * quant - despesa
        quant = quant + 26

        if (lucro>maiorLucro){
            maiorLucro = lucro
        }
        console.log(`Lucro: ${lucro} com preço a ${preco}`)

    }
    console.log(`Maior Lucro ${maiorLucro}`)
}
