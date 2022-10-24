function calcular(){
    var kg = document.getElementById("kg").value
    var gramas = kg * 1000    
        document.getElementById("gramas").innerHTML = 
                    `O seu peso em gramas é: ${gramas.toFixed(2)} gramas`
}