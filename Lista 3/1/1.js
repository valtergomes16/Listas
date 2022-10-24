function calcular(){
    for (let g=0; g<5; g++){
        let A = Number(prompt(`Informe o primeiro número`))
        let B = Number(prompt(`Informe o segundo número`))
        let C = Number(prompt(`Informe o terceiro número`))
        let D = Number(prompt(`Informe o quarto número`))
        let aux
        console.log(`Ordem lida: ${A} - ${B} - ${C} - ${D}`)
            for(let i=1; i<=3; i++){
                if(A>B){
                    aux = A
                    A = B
                    B = aux
                }
                if(B>C){
                    aux = B
                    B = C
                    C = aux
                }
                if(C>D){
                    aux = C
                    C = D
                    D = aux
                }
            }
            console.log(`Crescente ${A} - ${B} - ${C} - ${D}`)
            console.log(`Decrescente ${D} - ${C} - ${B} - ${A}`)
    }
}