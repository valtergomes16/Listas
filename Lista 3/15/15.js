function calcular(){
    let sexo
    let resp
    let cont1 = 0
    let cont2 =0
    let mulher = 0
    let homem = 0
    let quantHomem = 0
    for(let i=0; i<3; i++){
        sexo = prompt(`Informe o ${i+1} sexo:\n1. Homem\n2. Mulher`)
        resp = prompt(`${i+1}Você gostou do produto?\n1. Sim\n2. Não`)
        if(resp==1){
            cont1++
        }
        else if(resp==2){
            cont2++
        }
        else{
            alert(`Número(s) inválido(s), digite novamente`)
            i--
        }
        if(sexo==2 && resp==1){
            mulher++
        }
        else if(sexo==1 && resp==2){
            homem++
        }
        if(sexo==1){
            quantHomem++
        }
        //toUpperCase - deixa tudo maiúsculo
    }
    console.log(`Número de pessoas que responderam sim: ${cont1}\nNúmero de pessoas que disseram não: ${cont2}`)
    console.log(`Número de mulheres que responderam sim: ${mulher}\nPorcentagem de homens que disseram não: ${(homem/quantHomem*100).toFixed(2)}%`)
}