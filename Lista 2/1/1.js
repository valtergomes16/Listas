function calcular() {
 let n1 = Number(document.getElementById("n1").value)
 let n2 = Number(document.getElementById("n2").value)
 let n3 = Number(document.getElementById("n3").value)
 let n4 = Number(document.getElementById("n4").value)
 let media = (n1 + n2 + n3 + n4) / 4
 let resul

 if (media<7){
    resul = "Reprovado"
 }
 else{
    resul = "Aprovado"
 }
 
 document.getElementById("media").innerHTML = `A média é de: ${media.toFixed(2)}` + " - " + resul 
}