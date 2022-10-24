function calcular(){
    let codigo = Number(document.getElementById("codigo").value)
    let quant = Number(document.getElementById("quant").value)
    let unitario
    let erro 
    let total
    let desconto
    let final

    if(codigo >=1 && codigo <= 10){
        unitario = 10
    }
    else if (codigo >=11 && codigo <= 20){
        unitario = 15
    }
    else if (codigo >= 21 && codigo <= 30){
        unitario = 20
    }
    else if (codigo >= 31 && codigo <= 40){
        unitario = 30
    }
    else{
        erro = true
    }

    //se não tiver erro (if " not erro")
    if(!erro){
        total = quant * unitario
        if(total<=250){
            desconto = total * 5/100
        }
        else if (total<500){
            desconto = total * 10/100
        }
        else {
            desconto = total * 15/100
        }
    }
    else{
        document.getElementById("unitario").innerHTML = `Valores informados são inválidos`
    }
    
    final = total - desconto

    document.getElementById("unitario").innerHTML = `Unitário ${unitario}`
    document.getElementById("total").innerHTML = `Total ${total}`
    document.getElementById("desconto").innerHTML = `Desconto ${desconto}`
    document.getElementById("final").innerHTML = `Final ${final}`


}