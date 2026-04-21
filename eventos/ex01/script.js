const botao = [...document.querySelectorAll(".curso")]

botao.map((el) => {
    el.addEventListener('click', (evt) => {
        const el = evt.target
        el.classList.toggle('selecionado')
    })
})