const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const botao = document.querySelector('#botaocopy')
const cursos = [...document.querySelectorAll('.curso')]

cursos.map((el) => {
    el.addEventListener('click', (evet) => {
        const el = evet.target
        el.classList.toggle('selecionado')
    })
})

botao.addEventListener('click', () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    const cursosNaoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')] //:not() tudo que estiver dentro de parênteses não vai ser selecionado

    cursosSelecionados.map((el) => {
        caixa2.appendChild(el)
    })
    cursosNaoSelecionados.map((el) => {
        caixa1.appendChild(el)
    })
})