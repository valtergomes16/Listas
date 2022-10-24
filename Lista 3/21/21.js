function calcular(){
    let codigo
    let c1=0; c2=0; c3=0; c4=0
    let nulo = 0
    let branco = 0
    let perNulo
    let perBranco

    for(i=0;i<=4;i++){
        codigo = Number(prompt(`Informe o código do candidato:\n1 - Primeiro candidato\n2 - Segundo candidato\n3 - Terceiro candidato\n4 - Quarto candidato\n5 - Voto nulo\n6 - Voto em branco`))
        if(codigo==`1`){
            c1++
        }
        else if(codigo==`2`){
            c2++
        }
        else if(codigo==`3`){
            c3++
        }
        else if(codigo==`4`){
            c4++
        }
        else if(codigo==`5`){
            nulo++
        }
        else if(codigo==`6`){
            branco++
        }
        else{
            alert(`Código invalido, digite novamente`)
            i--
        }
    }
    perNulo = nulo / 5 * 100
    perBranco = branco / 5 * 100
    
    alert(`Total de votos para o primeiro candidato = ${c1}\nTotal de votos para o segundo candidato = ${c2}\nTotal de votos para o terceiro candidato = ${c3}\nTotal de votos para o quarto candidato = ${c4}\nPorcentagem de votos nulos = ${perNulo}%\nPorcentagem de votos em branco = ${perBranco}%`)
}