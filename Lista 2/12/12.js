function calcular(){
    let salario = Number(document.getElementById("salario").value)
    let imposto
    let gratificacao

    if (salario<=350){
        gratificacao = 100
    }
    else if(salario < 600){
        gratificacao = 75
    }
    else if (salario<=900){
        gratificacao = 50
    }
    else{
        gratificacao = 35
    }

    imposto = salario * 7 / 100
    let receber = salario + gratificacao - imposto

    document.getElementById("receber").innerHTML = receber

}