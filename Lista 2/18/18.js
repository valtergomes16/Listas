function calcular(){

    let idade = Number(document.getElementById("idade").value)
    let x

    if(idade >= 18){
        x = "Maior de idade"
    }
    else{
        x = "Menor de idade"
    }

    document.getElementById("x").innerHTML = x
}