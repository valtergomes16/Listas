function calcular(){
    let salario = Number(document.getElementById("salario").value)
    let resultado 
    let erro = false

    if (salario<500){
        resultado = salario + (salario * 30 / 100)
        document.getElementById("resultado").innerHTML = `Salário reajustado: R$ ${resultado}`
    }
    else {
        erro = true
    }
    if (erro){
        document.getElementById("resultado").innerHTML = `Funcionário não tem direito ao aumento`
    }
    
}