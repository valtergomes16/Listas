function calcular(){
    var lado = document.getElementById("lado").value
    var area = lado * lado 
    
        document.getElementById("area").innerHTML = 
                    `A área do quadrado é de: ${area.toFixed(2)} cm²`
}