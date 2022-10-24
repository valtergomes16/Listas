function calcular(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let menor

    if (n1<n2){
        menor = n1
    }
    else{
        menor = n2
    }

    document.getElementById("menor").innerHTML = `O menor númeor é o ${menor}`
}