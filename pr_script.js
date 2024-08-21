let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function clean(){
    valores = []
    num.value = ''
    lista.innerHTML = ''
    res.innerHTML = ''
}

// essa condiçao dentro da funçao inLista quer dizer que "se o numero q o usuario digitou estiver presente", retorne verdadeiro (isso permite repetição de um mesmo numeros varias vezes), caso a função inLista, me retorna false, quer dizer que o elemento já se encontra na lista --e não atenderá a condição !inLista(num.value, valores).

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let option = document.createElement('option')
        option.text=`Valor ${num.value} adicionado`
        lista.appendChild(option)
        res.innerHTML = ''

    } else {
        window.alert('valor inválido ou já encontrado na lista')
    }
    num.value=''
    num.focus()
} 

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        for(let pos in valores){
            if(valores[pos] > maior)
                maior = valores[pos]
            
            if(valores[pos] < menor)
                menor = valores[pos]            
        }

        let soma = 0
        for(let pos in valores){
            soma += valores[pos]
        } 
        
        let media = soma/valores.length

        let valoresPrimos = ''
        for(let inx in valores){
            let divisor = 0
            for(let j = 1;j<=valores[inx];j++){
                if(valores[inx] % j == 0){
                    divisor++
                } 
            } 
                if(divisor == 2){
                    valoresPrimos += `${valores[inx]}, `
                }                
            
        } 
        
        if(valoresPrimos == ''){
            valoresPrimos = `não há numero primos!`
        }

        valoresPrimos = valoresPrimos.slice(0, -2) + '.'
       
        

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>Maior valor inserido: ${maior}</p>`
        res.innerHTML += `<p>Menor valor inserido: ${menor}</p>`
        res.innerHTML += `<p>Soma total: ${soma}</p>`
        res.innerHTML += `<p>Média dos valores: ${media}</p>`
        res.innerHTML += `<p>Numeros Primos: ${valoresPrimos}</p>`

    }
}