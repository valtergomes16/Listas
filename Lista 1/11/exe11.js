function calcular() {
    var D = Number(document.getElementById("D").value)
    var d = Number(document.getElementById("d").value)
    var area = D * d / 2
    document.getElementById("area").innerHTML = `A área do losango é de ${area.toFixed(2)}`
    }