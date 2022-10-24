function calcular(){

    let senha = Number(document.getElementById("senha").value)
    let senha1

    if(senha == 4531){
        senha1 = "Acesso permitido"
    }
    else{
        senha1 = "Acesso negado"
    }

    document.getElementById("senha1").innerHTML = senha1
}