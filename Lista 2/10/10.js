function calcular(){
    let custo = Number(document.getElementById("custo").value)
    let novo
    let distribuidor
    let imposto
    let erro = false

    if (custo > 0 && custo <= 12000){
        distribuidor = custo * 5 / 100
        imposto = 0
    }
    else if(custo > 12000 && custo <= 25000){
        distribuidor = custo * 10 / 100
        imposto = custo * 15 / 100
    }
    else if(custo > 25000){
        distribuidor = custo * 15 / 100
        imposto = custo * 20 / 100
    }
    else {
        erro = true
    }

    novo = custo + imposto + distribuidor

    if(erro){
        document.getElementById("novo").innerHTML = `Informações inválidas. Digite novamente.`
    }
    else{
    document.getElementById("novo").innerHTML = `O novo valor do carro é de: ${novo}`
    }

}