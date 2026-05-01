const num = document.querySelectorAll('.num')
const op = document.querySelectorAll('.op')
const display = document.querySelector('#display')
const limpar = document.querySelector('#ac')
const res = document.querySelector("#igual")
const copy = document.querySelector('#copy')

let botaonum = [...num]
let botaoop = [...op]

let sinal = false
let virgula = false

botaonum.forEach((n)=>{
    n.addEventListener('click',(evt)=>{
        sinal=false
        if(evt.target.innerHTML==','){
            if(!virgula){
                virgula=true
                if(display.innerHTML=='0'){
                    display.innerHTML='0,'
                }else{
                    display.innerHTML+=evt.target.innerHTML
                }
            }
        }else if(display.innerHTML=='0'){
                display.innerHTML=''
                display.innerHTML+=evt.target.innerHTML
            } else {
                display.innerHTML+=evt.target.innerHTML
            }
        })
})

limpar.addEventListener('click',()=>{
    sinal=false
    virgula=false
    display.innerHTML='0'
})

botaoop.forEach((o)=>{
    o.addEventListener('click',(evt)=>{
        if(!sinal){
            sinal=true
            if(display.innerHTML=='0'){
                display.innerHTML=''
            }
            if(evt.target.innerHTML=='x'){
                display.innerHTML+='*'
            }else{
                display.innerHTML+=evt.target.innerHTML
            }
        }
    })
})

res.addEventListener("click",()=>{
    const tot=eval(display.innerHTML)
    display.innerHTML=tot
})

copy.addEventListener('click',()=>{
    navigator.clipboard.writeText(display.innerHTML)
})