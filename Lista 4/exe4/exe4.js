function calcular(){
    let vetor = []
    let posicao = []

    for(i=0; i<6; i++){
    vetor.push(Number(prompt(`Informe o ${i+1} do elemento`)))
    }
    for(i=0; i<6; i++){
        if(vetor[i] == 30){
        posicao.push(i) //insere em posição a posição i
        }
        if(posicao.length == 0) {
            console.log(`Nenhum número 30 foi encontrado`)
        } //length faz a função do contador
        else{
            console.log(`Posições ${posicao}`)
        }
    }
}