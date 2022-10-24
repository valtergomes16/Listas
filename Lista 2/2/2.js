function calcular(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let media = (n1 + n2) / 2
    let resul

    if (media<3){
        resul = "Reprovado"
    }
    else if(media<7){
        resul = "Exame"
    }
    else{
        resul = "Aprovado"
    }

    document.getElementById("media").innerHTML = `A média é de: ${media.toFixed(2)} - ${resul}`
}