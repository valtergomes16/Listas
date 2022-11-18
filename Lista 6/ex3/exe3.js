function calcular(){
    let matriz = []
    leitura(matriz)
    maior(matriz)
    menor(matriz)
}

function leitura(matriz){
    for(let i=0; i<6; i++){
        matriz[i] = []
        for(let j=0; j<3; j++){
            matriz[i][j] = Number(prompt(`Informe o ${j+1}º número da ${i+1}ª linha`))
        }
    }
    console.log(matriz)
}
function maior(matriz){
    let maior = 0
    let posicao
    for(let i=0; i<6; i++){
        for(let j=0; j<3; j++){
            if(maior < matriz[i][j]){
                maior = matriz[i][j]
                posicao = (`Linha ${i}, coluna ${j+1}`)
            }
        }
    }
    console.log(`O maior elemento da matriz é: ${maior} e sua posição é: ${posicao}`)
}
function menor(matriz){
    let menor = 0
    let posicao
    for(let i=0; i<6; i++){
        for(let j=0; j<3; j++){
            if(menor > matriz[i][j] || menor==0){
                menor = matriz[i][j]
                posicao = (`Linha ${i}, coluna ${j+1}`)
            }
        }
    }
    console.log(`O menor elemento da matriz é: ${menor} e sua posição é: ${posicao}`)
}