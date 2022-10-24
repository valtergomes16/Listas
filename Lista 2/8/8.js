function calcular(){
    let salario = Number(document.getElementById("salario").value)
    let resultado 

    if (salario<=300){
        resultado = salario + (salario * 35 / 100)
    }
    else {
        resultado = salario + (salario * 15 / 100)
    }
    document.getElementById("resultado").innerHTML = `Salário reajustado: R$ ${resultado}`
    
}