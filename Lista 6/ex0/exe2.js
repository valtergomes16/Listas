function calcular(){
    let matriz = [] //declaração de matriz
    leitura(matriz)
    console.log(matriz)
    calculaMedia(matriz)
}

function leitura(matriz){
    for(let i=0; i<4; i++){
        matriz[i] = [] //criando um vetor em cada posição da matriz
        alert(`Informe as notas do aluno ${i+1}`)
        for(let j=0; j<3; j++){
            matriz[i][j] = Number(prompt(`Informe a nota ${i+1}`))
        }
    }
}

function calculaMedia(matriz){
    let soma
    for(let i=0; i<matriz.lenght; i++){
        soma = 0 //zera a soma, pois é um outro aluno
        for(let j=0; j<matriz[i].lenght; j++){
            soma += matriz[i][j]
        }
        //encerram as notas
        console.log(`A média do aluno ${i+1} é ${soma / matriz[i].lenght}`)
    }
}
