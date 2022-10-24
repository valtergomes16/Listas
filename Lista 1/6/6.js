function calcular(){
    var salFixo = document.getElementById("salFixo").value
    var vendas = document.getElementById("vendas").value
    var comissao = vendas * 4/100
    var salFinal = parseFloat(salFixo) + comissao 
    
        document.getElementById("comissao").innerHTML = 
                    `A comissão é de: R$ ${comissao.toFixed(2)}`
        document.getElementById("salFinal").innerHTML = 
                    `A comissão é de: R$ ${salFinal.toFixed(2)}`
}