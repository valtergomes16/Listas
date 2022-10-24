function calcular(){
    var bMaior = document.getElementById("bMaior").value
    var bMenor = document.getElementById("bMenor").value
    var altura = document.getElementById("altura").value
    var area = (parseFloat(bMaior) + parseFloat(bMenor)) * altura / 2
    
        document.getElementById("area").innerHTML = 
                    `A área do trapézio é: ${area.toFixed(2)}`
}