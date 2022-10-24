function calcular(){
    let saldo = Number(document.getElementById("saldo").value)
    let resultado 

    if (saldo>400){
        resultado = saldo * 30 / 100
    }
    else if (saldo > 300 && saldo <= 400){
        resultado = saldo * 25 / 100
    }
    else if (saldo > 200 && saldo <= 300){
        resultado = saldo * 20 / 100
    }
    else {
        resultado = saldo * 10 / 100
    }
    document.getElementById("resultado").innerHTML = `Saldo médio: R$ ${saldo} </br>
    Valor do crédito: R$ ${resultado}`
    
}