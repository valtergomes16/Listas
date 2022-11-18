function calcular(){
    let vetor = []
    let media
    for(let i=0; i<4; i++){
        let obj = {
        sexo: prompt(`Informe o sexo:\nF - feminino\nM - masculino`).toLocaleLowerCase,
        altura: Number(prompt(`Informe a altura`)),
        idade: Number(prompt(`Informe a idade`)),
        corDosOlhos: prompt(`Informe a cor dos olhos:\nA - Azuis\nV - verdes\nC - castanhos`).toLocaleLowerCase,
        somaAltura: 0,
        cont: 0,
        maiorIdade: 0,
        masculino: 0,
        feminino: 0,
        }
        vetor.push(obj)
    }
    for(let i=0; i<4; i++){
        if(corDosOlhos == 'c' && altura > 1.60){
            vetor[i].somaAltura = vetor[i].altura + vetor[i].somaAltura
            vetor[i].cont++
        }
        if(vetor[i].idade > vetor[i].maiorIdade){
            vetor[i].maiorIdade = vetor[i].idade
        }
        if(vetor[i].sexo == 'f' && ((vetor[i].idade>=20 && vetor[i].idade<=45) || (vetor[i].corDosOlhos == 'v' && vetor[i].altura < 1.70))){
            vetor[i].feminino++
        }
        if(vetor[i].sexo == 'm'){
            vetor[i].masculino++
        }
    }
        console.log(media = vetor.somaAltura / vetor.cont)
}