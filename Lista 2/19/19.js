function calcular(){

    let altura = Number(document.getElementById("altura").value)
    let peso
    let sexo

    switch (sexo) {
        case 1: 
            peso = 72.7 * altura - 58
            break;
    
        default:
            peso = 62.1 * altura - 44.7
            break;
    }    

    document.getElementById("peso").innerHTML = `Peso ideal: ${peso} kg.`
}