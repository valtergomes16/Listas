function calcular(){
    let cont = 0
    let resultado
    while(cont<=10){
        for(let i=0;i<11;i++){
            resultado = cont * i
            console.log(`${cont} x ${i} = ${resultado}`)
        }
        console.log(`\n`)
        cont++
    }
}