function calcular(){

    let idade = Number(document.getElementById("idade").value)
    let categoria

    if(idade >= 5 && idade <=7){
        categoria = "Infantil"
    }
    else if(idade >= 8 && idade <= 10){
        categoria = "Juvenil"
    }
    else if(idade >= 11 && idade <= 15){
        categoria = "Adolescente"
    }
    else if(idade >= 16 && idade <= 30){
        categoria = "Adulto"
    }
    else if(idade > 30){
        categoria = "Sênior"
    }
    else{
        categoria = "inválida. Insira uma idade maior"
    }

    document.getElementById("categoria").innerHTML = `Categoria ${categoria}`
}