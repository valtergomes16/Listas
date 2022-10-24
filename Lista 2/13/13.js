function calcular(){
    let preco = Number(document.getElementById("preco").value)
    let novoPreco
    let classifica
    let erro = false

    if (preco > 0 && preco<=50){
        novoPreco = preco + preco * 5 / 100
    }
    else if(preco > 50 && preco <= 100){
        novoPreco = preco + preco * 10 / 100
    }
    else if (preco > 100){
        novoPreco = preco + preco * 15 / 100
    }
    else{
        erro = true
    }

    if (novoPreco<=80){
        classifica = "Barato"
    }
    else if(novoPreco <= 120){
        classifica = "Normal"
    }
    else if (novoPreco <= 200){
        classifica = "Caro"
    }
    else{
        classifica = "Muito caro"
    }
    if(erro){
        document.getElementById("novoPreco").innerHTML = `Preço inválido. Digite novamente.`
    }
    else{
    document.getElementById("novoPreco").innerHTML = `O novo preco do produto é de: ${novoPreco} </br> Classificação: ${classifica}`
    }

}