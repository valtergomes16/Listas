function calcular(){
    let vetor = []
    for(i=0; i<10; i++){
    let obj = {
        nome: prompt(`Informe o nome do vendedor`),
        vendas: Number(prompt(`Informe o total de vendas do vendedor`)),
        comissao: Number(prompt(`Informe a comissão do vendedor`)),
        receber: 0
        }
        vetor.push(obj)
    }
    let total = 0
    let maior = vetor[0].receber
    let nomeMaior = vetor[0].nome
    let menor = vetor[0].receber
    let nomeMenor = vetor[0].nome

    for(i=0; i<10; i++){
        vetor[i].receber = vetor[i].vendas * vetor[i].comissao / 100
        total += vetor[i].vendas
    }
    for(i=1; i<10; i++){
        if(vetor[i].receber > maior){
            maior = vetor[i].receber
            nomeMaior = vetor[i].nome
        }
        if(vetor[i].receber < menor){
            menor = vetor[i].receber
            nomeMenor = vetor[i].nome
        }
    }    
    for(i=0; i<10; i++){
        console.log(`O vendedor ${vetor[i].nome} receberá ${vetor[i].receber}`)
    }
    vetor[0].receber = 10
    console.log(vetor[0].receber)
    console.log(`Total de Vendas ${total}`)
    console.log(`Maior valor a receber ${maior} recebido por ${nomeMaior}`)
    console.log(`Menor valor a receber ${menor} recebido por ${nomeMenor}`)
}