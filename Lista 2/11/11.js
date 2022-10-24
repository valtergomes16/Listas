function calcular(){
    let salario = Number(document.getElementById("salario").value)
    let novo
    let aumento
    let erro = false

    if (salario > 0 && salario <= 300){
        aumento = salario * 15 / 100
    }
    else if(salario > 300 && salario < 600){
        aumento = salario * 10 / 100
    }
    else if(salario >= 600 && salario <= 900){
        aumento = salario * 5 / 100
    }
    else if(salario > 900){
        aumento = 0
    }
    else {
        erro = true
    }

    novo = salario + aumento

    if(erro){
        document.getElementById("novo").innerHTML = `Informações inválidas. Digite novamente.`
    }
    else{
    document.getElementById("novo").innerHTML = `O valor do aumento é de: ${aumento} </br> O novo salário é de: ${novo}`
    }

}