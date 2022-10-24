function calcular(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let escolha = Number(document.getElementById("escolha").value)
    let erro = false
    let resul
    let resul2
    switch(escolha) {
        case 1 : resul = Math.pow(n1,n2)
                 break   
        case 2: 
            resul = Math.pow(n1,1/2)
            resul2 = Math.pow(n2,1/2)
                break
        case 3: 
        resul = Math.pow(n1,1/3)
        resul2 = Math.pow(n2,1/3)
                break
        default: erro = true
    }
    if (n1==" " || n2==""){
        erro=true
    }
    if (erro){
        document.getElementById("resul").innerHTML = "Erro no programa. Tente novamente"    
    }   
    else {
        document.getElementById("resul").innerHTML = resul
    }
  
}