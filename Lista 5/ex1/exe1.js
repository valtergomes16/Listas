function calcular(){
    let menu = document.getElementById(`opt`).value
    let vetor = []
    switch(menu){
        case 1: 
            let objeto = {
                nome: prompt(`Digite o nome do vendedor`),
                codigo: Number(prompt(`Digite o código do vendedor`)),
                vendas: 0,
                mes: " "
                
            }
            break
        case 2:

            break
        case 3:
            break
        case 4:
            break
        case 5:
            break
        case 6:
            break
        case 7:
            alert(`Programa finalizado`)
            break
        default:
    }
}