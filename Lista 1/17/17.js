function calcular()
    {
        let raio = Number(document.getElementById("raio").value)
        let comprimento  = 2 * Math.PI * raio
        let area = Math.PI * Math.pow(raio, 2)
        let volume = 3/4 * Math.PI * Math.pow(raio, 3)
        //mostra o resultado
        //alert(`O valor do imc é de ${imc.toFixed(2)}`)
        document.getElementById("comprimento").innerHTML = ` O comprimento é de ${comprimento.toFixed(2)}`
        document.getElementById("area").innerHTML = ` A área é de ${area.toFixed(2)}`
        document.getElementById("volume").innerHTML = ` O volume é de ${volume.toFixed(2)}`      
    }