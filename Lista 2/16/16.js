function calcular(){

    let preco = Number(document.getElementById("preco").value)
    let novo
    let desconto
    let erro = false

    if(preco>0 && preco<=30){
        desconto = 0
    }
    else if(preco>30 && preco<=100){
        desconto = preco * 10 / 100
    }
    else if(preco>100){
        desconto = preco * 15 / 100
    }
    else{
        erro = true
    }

    novo = preco - desconto

    if (erro){
        document.getElementById("novo").innerHTML = "Erro no programa. Digite novamente."
    }
    else {
        document.getElementById("novo").innerHTML = `Desconto: R$ ${desconto} </br> Novo preço do produto: R$ ${novo}`
    }
}