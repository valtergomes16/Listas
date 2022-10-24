function calcular(){
    let idade
    let media
    let r1 = 0
    let altura
    let r2 = 0
    let r2Quant = 0
    let peso
    let porc = 0

    for(let i=0; i<5; i++){
        idade = Number(prompt(`Informe a idade ${i+1}`))
        altura = Number(prompt(`Informe a altura ${i+1}`))
        peso = Number(prompt(`Informe o peso ${i+1}`))
        if(idade>50){
            r1++
        }
        if(idade>=10 && idade <=20){
            r2 = r2 + altura
            r2Quant++
        }
        if(peso<40){
            porc++
        }
    }
    console.log(`A resposta 1 é ${r1}`)
    if(r2Quant != 0){
        console.log(`A resposta 2 é ${r2/r2Quant}`)
    }
    else{
        console.log(`Não há ninguém com idade entre 10 e 20`)
    }
    if(porc!=0){
        console.log(`A resposta 3 é ${porc/5*100}%`)
    }
    else{
        console.log(`Não há ninguém com peso inferior a 40 Kg`)
    }
}