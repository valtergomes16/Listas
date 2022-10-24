function calcular(){
    let preco = Number(document.getElementById("preco").value)
    let categoria = Number(document.getElementById("categoria").value)
    let situacao = document.getElementById("situacao")
    let erro = false
    let aumento
    let imposto
    let novoPreco
    let classificacao
    
    if (preco>0 && preco<=25) {
        if(categoria==1){
            aumento = preco*5/100
        }
        else if(categoria==2){
            aumento = preco*8/100
        }
        else if(categoria==3){
            aumento = preco*10/100
        }
    }
    else if (preco>25){
        if(categoria==1){
            aumento = preco*12/100
        }
        else if(categoria==2){
            aumento = preco*15/100
        }
        else if(categoria==3){
            aumento = preco*18/100
        }
    }
    else{
        erro = true
    }
    
    if (categoria==2 || situacao=="R"){
        imposto = preco*5/100
    }
    else{
        imposto = preco*8/100
    }

    novoPreco = preco + aumento - imposto

    if(novoPreco<=50){
        classificacao = "Barato"
    }
    else if(novoPreco>50 && novoPreco<120){
        classificacao = "Normal"
    }
    else{
        classificacao = "Caro"
    }

    document.getElementById("aumento").innerHTML = `Aumento: R$ ${aumento}`
    document.getElementById("imposto").innerHTML = `Imposto: R$ ${imposto}`
    document.getElementById("novoPreco").innerHTML = `Novo preço: R$ ${novoPreco}`
    document.getElementById("classificacao").innerHTML = `Classificação: ${classificacao}`


}