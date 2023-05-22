function calcular(){
    let vetor = []
    let somaSal = 0
    let quant = 0

    for(let i=0; i<3; i++){
        let obj = {
        
        renda: Number(prompt(`Informe a renda familiar`)),
        idade: Number(prompt(`Informe a idade`)),
        
        }
        vetor.push(obj)
    }

    let maior = vetor[0].idade
    let menor = vetor[0].idade

    for(let i=0; i<vetor.length; i++){
        somaSal += vetor[i].renda
        
    }
    for(let i=1; i<vetor.length; i++){
        if(vetor[i].idade > maior){
            maior = vetor[i].idade
        }
        if(vetor[i].idade < menor){
            menor = vetor[i].idade
        }
    }
    console.log(`A média salarial é de: R$${somaSal/vetor.length}`)
    console.log(`Maior idade: ${maior}`)
    console.log(`Menor idade: ${menor}`)
}