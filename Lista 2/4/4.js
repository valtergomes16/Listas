function calcular(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    let maior = n1

    if (n2>maior){
        maior = n2
        if (n3>maior){
            maior = n3
        }
    }
    
    document.getElementById("maior").innerHTML = `O maior númeor é o ${maior}`
}