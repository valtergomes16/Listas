function calcular(){
    var preco = document.getElementById("preco").value
    var novoPreco = preco - preco * 10/100 
    
        document.getElementById("novoPreco").innerHTML = 
                    `O novo preço é de: ${novoPreco.toFixed(2)}`
}