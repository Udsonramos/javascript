const botao = document.querySelector("#botaoadd")
const txtnome = document.querySelector('#inome')
const txtportas = document.querySelector('#iportas')
const resultado = document.querySelector('#resposta')
const militar_radio = document.querySelector('#imilitar')
const normal_radio = document.querySelector('#inormal')
const txtblindagem = document.querySelector('#iblindagem')
const txtmunicao = document.querySelector('#imunicao')

let armazenador = []

class Carro{
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
    }
    getNome = function() {
        return this.nome
    }
    getPortas = function() {
        return this.portas
    }
}

class CarroBlindado extends Carro{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
    }
    getBlindagem = function(){
        return this.blindagem
    }
    getMunicao = function(){
        return this.municao
    }
}

militar_radio.addEventListener('click', () => {
    if(militar_radio.checked) {
        txtblindagem.removeAttribute('disabled')
        txtmunicao.removeAttribute('disabled')
    }
})

normal_radio.addEventListener('click', () => {
    if(normal_radio.checked) {
        txtblindagem.setAttribute('disabled', 'disabled')
        txtmunicao.setAttribute('disabled', 'disabled')
    }
})

function addTexto() {
    resultado.innerHTML =""
    armazenador.map((c) => {
        const p = document.createElement('p')
        p.innerHTML = `Nome: ${c.getNome()}<br>`
        p.innerHTML += `Q.Portas: ${c.getPortas()}<br>`
        p.innerHTML += `Blindagem: ${c.getBlindagem()}<br>`
        p.innerHTML += `Q.Munição: ${c.getMunicao()}<br>`

        resultado.appendChild(p)
    })
}

botao.addEventListener('click', () => {
    const cmb = new CarroBlindado(txtnome.value, Number(txtportas.value), Number(txtblindagem.value), Number(txtmunicao.value))
    armazenador.push(cmb)
    addTexto()
    txtnome.value = ''
    txtportas.value = ''
    txtblindagem.value = ''
    txtmunicao.value = ''
})

