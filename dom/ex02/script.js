
const main = document.querySelector('#principal')
const curso = ["HTML","CSS","Javascript","PHP","React","MySQL"]

curso.map((el) => { //usado para percorrer todos os elementos de curso.
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("class","curso")
    novoElemento.innerHTML = el

    novoElemento.addEventListener('click', (evt) => {
        const remover = evt.target
        main.removeChild(remover)
    })

    main.appendChild(novoElemento)
})