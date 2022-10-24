function calcular(){
    let salario = Number(document.getElementById("salario").value)
    let novoSal
    let erro = false

    if (salario > 0 && salario <= 300){
        novoSal = salario + salario * 50 / 100
    }
    else if(salario > 300 && salario <= 500){
        novoSal = salario + salario * 40 / 100
    }
    else if(salario > 500 && salario <= 700){
        novoSal = salario + salario * 30 / 100
    }
    else if(salario > 700 && salario <= 800){
        novoSal = salario + salario * 20 / 100
    }
    else if(salario > 800 && salario <= 1000){
        novoSal = salario + salario * 10 / 100
    }
    else if(salario > 1000){
        novoSal = salario + salario * 5 / 100
    }
    else{
        erro = true
    }

    if(erro){
        document.getElementById("novoSal").innerHTML = `Salário inválido. Digite novamente.`
    }
    else{
    document.getElementById("novoSal").innerHTML = `O novo salário do funcionário é de: ${novoSal}`
    }

}