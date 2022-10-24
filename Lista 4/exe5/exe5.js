function calcular(){
    let logica = []
    let linguagem = []
    let juntas = []

    for(i=0; i<10; i++){
        logica.push(Number(prompt(`Informe o número da matrícula em lógica`)))
    }
    for(i=0; i<8; i++){
        linguagem.push(Number(prompt(`Informe o número da matrícula em linguagem de programação`)))
    }
    for(i=0; i<10; i++){
        for(c=0;c<8; c++){
            if(logica[i]==linguagem[c]){
                console.log(juntas.push(logica[i]))
            }
        }
    }
    if(juntas.length == 0){
        console.log(`Não existem alunos que fazem as duas diciplinas`)
    }
    else{
        console.log(`Alunos que fazem as duas disciplinas ${juntas}`)
    }
}