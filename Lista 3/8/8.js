function calcular(){
    let idade
    let peso
    let altura
    let olhos
    let cabelo
    let contPeso = 0
    let contAltura = 0
    let media = 0
    let perOlhos = 0
    let contRuivo = 0
    
    for(i=0;i<6;i++){
        idade = Number(prompt(`Informe a ${i+1} idade`))
        peso = Number(prompt(`Informe o ${i+1} peso`))
        altura = Number(prompt(`Informe a ${i+1} altura`))
        olhos = prompt(`Digite a cor do ${i+1} olho\nA - azul\nP - preto\nV - verde\nC - castanho`)
        cabelo = prompt(`Digite a cor do ${i+1} cabelo\nP - preto\nC - castanho\nL - louro\nR - ruivo`)
        
        if(idade>50 && peso<60){
            contPeso++
        }
        if(altura<1,50){
            contAltura++
            media = media + idade
        }
        if(olhos==`A`){
            perOlhos++ 
        } 
        if(cabelo==`R` && olhos!=`A`){
            contRuivo++
        }
    }
    media = media / contAltura
    perOlhos = perOlhos / 6 * 100
    alert(`Quantidade de pessoas com idade superior a 50 anos e peso inferior a 50 kg: ${contPeso}\nMédia das idades das pessoas com altura inferior a 1,50 m: ${media.toFixed(2)}
\nPorcentagem de pessoas com olhos azuis: ${perOlhos.toFixed(2)}%\nQuantidade de pessoas ruivas e que não possuem olhos azuis: ${contRuivo}`)
}