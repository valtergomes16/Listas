function calcular(){

    let preco = Number(document.getElementById("preco").value)
    let codigo = Number(document.getElementById("codigo").value)
    let procedencia
    let erro = false

    if(codigo==1){
        procedencia = "Sul"
    }
    else if(codigo==2){
        procedencia = "Norte"
    }
    else if(codigo==3){
        procedencia = "Leste"
    }
    else if(codigo==4){
        procedencia = "Oeste"
    }
    else if(codigo==5 || codigo==6){
        procedencia = "Nordeste"
    }
    else if(codigo>=7 && codigo<=9){
        procedencia = "Sudeste"
    }
    else if(codigo>=10 && codigo<=20){
        procedencia = "Centro-oeste"
    }
    else if(codigo>20 && codigo<=30){
        procedencia = "Nordeste"
    }
    else{
        erro = true
    }


    if (erro){
        document.getElementById("procedencia").innerHTML = "Código inválido. Digite novamente."
    }
    else {
        document.getElementById("procedencia").innerHTML = `Procedência: ${procedencia}`
    }
}