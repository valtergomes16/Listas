function calcular(){
    let extra = Number(document.getElementById("extra").value)
    let falta = Number(document.getElementById("falta").value)
    let erro = false
    let premio
    let h

    h = (extra - (2 / 3 * falta)) * 60
    
    if (h >= 2400){
        premio = 500
    }
    else if (h > 1800 && h <2400){
        premio = 400
    }
    else if (h >= 1200 && h <1800){
        premio = 300
    }
    else if (h >= 600 && h < 1200){
        premio = 200
    }
    else{
        premio = 100
    }

    document.getElementById("premio").innerHTML = `Prêmio: R$ ${premio}`
}