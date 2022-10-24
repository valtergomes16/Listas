function calcular(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var num3 = document.getElementById("num3").value
    var resul = num1 * num2 * num3

    document.getElementById("resul").innerHTML = 
                    `O valor da multiplicação dos três números é de ${resul.toFixed(2)}`
}