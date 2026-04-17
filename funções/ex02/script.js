/*function multiplicacao(n1, n2) {
    return n1*n2
}

let multi = multiplicacao(4, 3)
console.log(multi)
*/

/*function parimpar(n) {
    if (n%2 == 0) {
        console.log('Par')
    } else {
        console.log('Impar')
    }
}

let parimpa = parimpar(10)
*/

/*
function soma(n1=0, n2=0) {
    return n1+n2
}

let s = soma(2121, 102983)
console.log(s)*/

/*function idade(ano, nasc) {
    return ano - nasc
}

let nasc = idade(2026, 1910)
console.log(nasc)*/

/*const dobro = (n) => n * 2;

console.log(dobro(200))*/

/*let lista = []

function isNumero(n) {
    if(n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function adicionar(n) {
    if (isNumero(n) == true) {
        lista.push(n)
        console.log(`Número ${n} adicionado!`)
    } else {
        console.log('Valor inválido!')
    }
}

function finalizar() {
    if (lista.length == 0) {
        console.log('Adicione valores antes de finalizar!')
    } else {
        let total = lista.length
        console.log(`a lista tem ${total} valores`)
    }
}

adicionar(23)
adicionar(5)
console.log(lista)
finalizar()*/

/*let boletim = []

function notaValida(n) {
    if(n >= 0 && n <= 10) {
        return true
        //console.log('tudo certo')
    } else {
        return false
        //console.log('Não ta certo')
    }
}

function cadastrarNota(n) {
    if (notaValida(n) == true) {
        boletim.push(n)
        console.log(`Nota ${boletim} cadastrada!`)
    } else {
        console.log('Nota inválida, Digite de 0 a 10')
    }
}

function calcularMedia() {
    let soma = 0
    for(let pos in boletim) {
        soma += boletim[pos]
    }

    let media = soma / boletim.length
    return media // TINHA ESQUECIDO DE RETORNAR PARA A VARIÁVEL APARECER PARA A FUNCTION ABAIXO.
}

function gerarRelatorio() {
    if (boletim.length == 0) { //para fazer essa comparação, precisamos usar .length (se a quantidade de elementos no array for igual a 0...) para o js conseguir entender
        console.log('Não é possível gerar relatório')
    } else {
        let m = calcularMedia()

        if (m >= 7) {
            console.log(`A média da turma: ${m.toFixed(2)}. Status: ACIMA DA MÉDIA`) //toFixed limita o número para aparecer em apenas duas casas decimais.
        } else {
            console.log(`A média da turma: ${m.toFixed(2)}. Status: ABAIXO DA MÉDIA`)
        }
    }
}

cadastrarNota(10)
cadastrarNota(10)
cadastrarNota(10)
calcularMedia()
gerarRelatorio()
*/

function transformar(celsius) {
    let conversao = (celsius - 32) / 1.8
    return conversao
}

function previsao(f) {
    let converter = transformar(f)
    
    if (converter > 25) {
        console.log(`Está calor: ${converter.toFixed(1)}°C.`)
    } else {
        console.log(`Está fresco: ${converter.toFixed(1)}°C.`)
    }
    return converter
}

let temperatura = previsao(10)