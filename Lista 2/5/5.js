function calcular(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let escolha = Number(document.getElementById("escolha").value)
    let erro = false
    let resul
    switch(escolha) {
        case 1 : resul = (n1 + n2) / 2
                 break   
        case 2:  if (n1 > n2){
            resul = n1 - n2
                }
                else {
                    resul = n2 - n1
                }
                break
        case 3: resul = n1 * n2
                break
        case 4: if (n2 != 0){
                    resul = n1 / n2
                }
                else {
                    erro = true
                }
                break
        default: erro = true
    }
    if (erro){
        document.getElementById("resul").innerHTML = "Erro no programa. Tente novamente"    
    }   
    else {
        document.getElementById("resul").innerHTML = resul
    }
  
}