function calcular(){
    let matriz = []
    quant(matriz)
}

function quant(matriz){
    let cont = 0
    for(let i=0; i<3; i++){
        matriz[i] = []
        for(let j=0; j<5; j++){
            matriz[i][j] = Number(prompt(`Informe um número inteiro`))
            if(matriz[i][j] >= 15 && matriz[i][j] <= 20){
                cont++
            }
        }
    }
    console.log(matriz)
    console.log(`A quantidade de elemento(s) entre 15 e 20 é(são): ${cont}`)
}