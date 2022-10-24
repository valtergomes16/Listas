function calcular(){
    let opcao
    let salario
    let novo
    let ferias
    do{
        opcao = Number(prompt(`Informe\n1. Novo salário\n2.Férias\n3. Décimo terceiro\n4. Sair`))
        switch(opcao){
            case 1:
                salario = Number(prompt(`Informe o salário`))
                if(salario >= 0 && salario<2100){
                    novo = salario + salario * 15 / 100
                }
                else if(salario>=2100 && salario<=6000){
                    novo = salario + salario * 10 / 100
                }
                else if(salario>6000){
                    novo = salario + salario * 5 / 100
                }
                else{
                    alert(`Salário informado não pode ser negativo`)
                    break
                }
                alert(`Novo salário: R$ ${novo}`)
                break
            case 2:
                salario = Number(prompt(`Informe o salário`))
                if(salario>0){
                ferias = salario + salario * 1 / 3
                alert(`Valor das férias: R$ ${ferias}`)
                }
                else{
                    alert(`Salário informado não pode ser negativo`)
                }
                break
            case 3:
                salario = Number(prompt(`Informe o salário`))
                let meses = Number(prompt(`Informe o número de mêses de trabalho no ano`))
                if(salario>0){
                    if(meses>=0 && meses<=12){
                        meses = salario * meses / 12
                        alert(`Valor do décimo terceiro: R$ ${meses}`)
                    }
                    else{
                        alert(`Mêses não podem ser negativos nem > 12`)
                    }
                }
                else{
                    alert(`Salário negativo`)
                }
                break
            case 4: 
                alert(`Obrigado por utilizar o nosso sistema`)
                break
            default:
                alert(`Opção inválida, tente novamente`)
        }
    }
    while(opcao!=4)  
}