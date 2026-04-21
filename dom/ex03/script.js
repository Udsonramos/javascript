const input = document.querySelector("#inome")
const botaoadd = document.querySelector("#btnadd")
const botaoremove = document.querySelector("#btnremove")
const botaoselect = document.querySelector("#btnselect")
const caixacaixa = document.querySelector('#caixacaixa')

function radioSelecionado() {
    const radios = [...document.querySelectorAll("input[type=radio]")]
    const radioPegue = radios.filter((v) => {
        return v.checked
    })
    return radioPegue[0]
}

botaoselect.addEventListener("click", (evt) => {
    const radio = radioSelecionado()
    if (radio != undefined) {
        const cursoSelecionado = radio.parentElement.textContent
        alert(`Curso selecionado: ${cursoSelecionado}`)
    } else {
        alert('Selecione um curso!')
    }
})

botaoremove.addEventListener("click", (evt) => {
    const radio = radioSelecionado()
    if (radio != undefined) {
        const remover = radio.parentNode
        console.log(remover)
        remover.remove()
    } else {
        alert("Selecione um curso para remover!")
    }
})

botaoadd.addEventListener('click', (evt) => {

    const novoCurso = input.value
    if (novoCurso!='') {
        const novoElemento = document.createElement('div', 'input')
        novoElemento.setAttribute('class', 'curso')
        novoElemento.innerHTML = novoCurso

        const radio = document.createElement('input')
        radio.setAttribute('type', 'radio')
        radio.setAttribute('name', 'select')
        novoElemento.appendChild(radio)

        caixacaixa.appendChild(novoElemento)
    } else {
        alert('Digite o nome para criar o curso!')
    }

})