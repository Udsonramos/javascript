class Calculadora{
    constructor(displayElement){
        this.display=displayElement
        this.limpar()
    }
    limpar(){
        this.valorAtual='0'
        this.valorAnterior=''
        this.houveResumo=false
        this.atualizarDisplay()
    }
    adicionarNumero(numero){
        if(this.houveResumo){
            this.valorAtual=numero===','?'0,':numero
            this.houveResumo=false
            this.atualizarDisplay()
            return
        }

        if(this.valorAtual==='0'&&numero!==','){
            this.valorAtual=numero
        }else{
            this.valorAtual+=numero
        }
        this.atualizarDisplay()
    }

    atualizarDisplay(){
        this.display.innerText=this.valorAtual
    }
}

const display = document.querySelector('#display')
const ac = document.querySelector('#ac')
const copy = document.querySelector('#copy')
const res = document.querySelector('#igual')
const virgula = document.querySelector('#virgula')

const num = document.querySelectorAll('.num')
const op = document.querySelectorAll('.op')

const calc = new Calculadora(display)

num.forEach((n)=>{
 n.addEventListener('click',(evt)=>{
    calc.adicionarNumero(evt.target.innerText)
 })
})

op.forEach((o)=>{
    o.addEventListener('click',()=>{
        console.log(o.innerText)
    })
})

ac.addEventListener('click',()=>{
    calc.limpar()
})