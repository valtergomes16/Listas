function calcular(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var resul = num1 / num2 

    document.getElementById("resul").innerHTML = 
                    `O valor da divisão entre os números é ${resul.toFixed(2)}`
}