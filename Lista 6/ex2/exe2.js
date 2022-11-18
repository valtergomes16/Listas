function calcular(){
    let matriz = []
    quant(matriz)
    mediaPar(matriz)
}

function quant(matriz){
    for(let i=0; i<2; i++){
        let cont = 0
        matriz[i] = []
        for(let j=0; j<4; j++){
            matriz[i][j] = Number(prompt(`Informe um número inteiro`))
            if(matriz[i][j] >= 12 && matriz[i][j] <= 20){
                cont++
            }
        }
        console.log(`A quantidade de elemento(s) entre 12 e 20 na linha ${i+1} é(são): ${cont}`)
    }
    console.log(matriz)
}

function mediaPar(matriz){
    let soma = 0
    for(let i=0; i<2; i++){
        for(let j=0; j<4; j++){
            soma += matriz[i][j]
        }
    }
    console.log(`Média dos elementos pares da matriz: ${(soma/8).toFixed(2)}`)
}