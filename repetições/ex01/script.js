var iinicio = document.querySelector('#iinicio')

var ifim = document.querySelector('#ifim')


var ipasso = document.querySelector('#ipasso')


var res = document.querySelector('#contagem')
var contando = document.querySelector('#numeros')
        
    function clicar() {
        var fim = Number(ifim.value)
        var passo = Number(ipasso.value)
        res.innerHTML = 'Contando:'
        contando.innerHTML = ''

        for(var inicio = Number(iinicio.value);inicio <= fim;inicio += passo) {
            
            contando.innerHTML += `${inicio}👉 `
        }
        contando.innerHTML += '🏴'
    }

