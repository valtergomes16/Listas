function calcular() {
var num1 = document.getElementById("num1").value
var num2 = document.getElementById("num2").value
var resul = num1 - num2
document.getElementById("resul").innerHTML = `A subtração dos números é de ${resul.toFixed(2)}`
}