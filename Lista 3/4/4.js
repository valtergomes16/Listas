function calcular(){
    let numero = Number((prompt(`Informe um número`)))
    let cont = 0

    while(cont<=10){
        console.log(`${numero} x ${cont} = ${numero * cont}`)
        cont ++
    }
}