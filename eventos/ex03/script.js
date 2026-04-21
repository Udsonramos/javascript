const botao = document.querySelector('#botao')
const cursos = [...document.querySelectorAll('.curso:not(#botao)')]

botao.addEventListener ('click', (evt) => {
    evt.stopPropagation() //impede o evento de acontecer
})

cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        console.log('clicou')
    } )
})