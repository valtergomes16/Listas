function calcular(){
    let c1 = Number(document.getElementById("c1").value)
    let c2 = Number(document.getElementById("c2").value)
    let hip = Math.sqrt(Math.pow(c1,2)+ Math.pow(c2,2))

    document.getElementById("hip").innerHTML = `O valor da hipotenusa é: ${hip}`
}