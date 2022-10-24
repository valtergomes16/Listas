function calcular(){
    for (let g=0; g<5; g++){
        let codigo = prompt(`Informe o código: \n V - transação à vista \n P - transação a prazo`).toLowerCase()
        let valor = Number(prompt(`Digite o valor da ${g+1} prestação: `))
        let totalVista = 0
        let totalPrazo = 0

        if (codigo == 'V') {
            totalVista = totalVista + valor
        }
        else if (codigo == 'P') {
            totalPrazo = totalPrazo + valor
        }
    }
    console.log(`Total à vista: ${totalVista}`)
    console.log(`Total a prazo: ${totalPrazo}`)
    console.log(`Total: ${totalPrazo + totalVista}`)
    console.log(`Primeira parcela: ${totalPrazo / 3}`)
}