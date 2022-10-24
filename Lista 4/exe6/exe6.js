function calcular(){
    let vendas = []
    let comissao = []
    let vendedor = []
    let receber = []
    let total = 0
    let maior = receber [0]
    let nomeMaior = vendedor [0]
    let menor = receber [0]
    let nomeMenor = vendedor [0]

    for(i=0; i<10; i++){
        vendedor.push((prompt(`Informe o nome do vendedor`)))
        vendas.push(Number(prompt(`Informe o total de vendas do vendedor ${vendedor[i]}`)))
        comissao.push(Number(prompt(`Informe a comissão do vendedor ${vendedor[i]}`)))
    }
    for(i=0; i<10; i++){
        receber.push(vendas[i] * comissao[i] / 100)
        total += vendas[i]
    }
    for(i=1; i<10; i++){
        if(receber[i] > maior){
            maior = receber[i]
            nomeMaior = vendedor[i]
        }
        if(receber[i] < menor){
            menor = receber[i]
            nomeMenor = vendedor[i]
        }
    }    
    for(i=0; i<10; i++){
        console.log(`O vendedor ${vendedor[i]} receberá ${receber[i]}`)
    }
    console.log(`Total de Vendas ${total}`)
    console.log(`Maior valor a receber ${maior} recebido por ${nomeMaior}`)
    console.log(`Menor valor a receber ${menor} recebido por ${nomeMenor}`)
}