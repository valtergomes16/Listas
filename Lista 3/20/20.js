function calcular(){
    let opcao
    let media
    let n1
    let n2
    let n3

    do{
        opcao = Number(prompt(`Informe\n1. Média aritmética\n2.Média ponderada\n3. Sair`))
        switch(opcao){
            case 1:
                n1 = Number(prompt(`Informe a primeira nota`))
                n2 = Number(prompt(`Informe a segunda nota`))
                if(n1 >= 0 && n2 >=0){
                    media = (n1 + n2) / 2
                alert(`Média aritmética: ${media}`)
                }
                else{
                    alert(`Insira uma nota >= 0`)
                    break
                }
                break
            case 2:
                n1 = Number(prompt(`Informe a primeira nota`))
                let p1 = Number(prompt(`Informe o peso da primeira nota`))
                n2 = Number(prompt(`Informe a segunda nota`))
                let p2 = Number(prompt(`Informe o peso da segunda nota`))
                n3 = Number(prompt(`Informe a terceira nota`))
                let p3 = Number(prompt(`Informe o peso da terceira nota`))
                if(n1 >= 0 && n2 && n3>=0){
                let mediaPonderada = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3)
                alert(`Média ponderada: ${mediaPonderada}`)
                }
                else{
                    alert(`Insira uma nota >= 0`)
                }
                break
            case 3: 
                alert(`Obrigado por utilizar o nosso sistema`)
                break
            default:
                alert(`Opção inválida, tente novamente`)
        }
    }
    while(opcao!=3)  
}