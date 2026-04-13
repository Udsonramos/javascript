var num = document.querySelector('#inumero')
var lista = document.querySelector('#ilista')
var res = document.querySelector('#res')
var valores = [] //array para os números preenchidos no num serem guardados

// validação do input do num
function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) { // se o valor que for colocado no isNumber, que é o do num, for maior ou igual a 1 e menor ou igual a 100...
        return true //será validado
    } else {
        return false //se não, será invalidado.
    }
}

function inList(n, l) { // esse chamado tem dois valores pq colocamos isso no if da function adicionar.
    if (l.indexOf(Number(n)) != -1) { //se dentro da array tivermos um número diferente de -1, ele valida
        return true
    } else {
        return false
    }
}

function adicionar() { //chamado criado lá no HTML
    if (isNumber(num.value) && !inList(num.value, valores)) { //é criado um chamado para o num e um para a lista. Se o valor do isNumber e não tiver listado um valor e nada guardado no array...
        valores.push(Number(num.value)) //insira um número no array
        let item = document.createElement('option') //crie uma option no HTML
        item.text = `Valor ${num.value} adicionado.` //coloque esse texto na option
        lista.appendChild(item) //adicione na lista
        res.innerHTML = '' //e mantenha o resultado sem nada.
    } else {
        window.alert('Valor inválido ou já selecionado!') //vai aparecer essa notificação se não tiver valor no num ou se for um número repetido
    }
    num.value = '' //toda vez que já tiver adicionado o número, o input do num será limpado
    num.focus() //depois de adicionar um número, o input continuará selecionado
}

function finalizar() { //chamado criado no HTML
    if (valores.length == 0) { //Se não tiver nenhum valor no array...
        window.alert('Adicione valores antes de finalizar!') //Vai abrir essa mensagem no navegador
    } else {
        let tot = valores.length //quantidade de valores guardados no array

        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}
