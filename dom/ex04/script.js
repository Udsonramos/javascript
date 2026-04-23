const array = document.querySelector("#array")
const pesquisa = document.querySelector("#ipreencher")
const resultado = document.querySelector("#resultado")
const botao = document.querySelector("#btnpesquisar")

const valores = [9, 5, 4, 6, 10]
array.innerHTML = `[${valores}]`

botao.addEventListener("click", (evt) => {
    const ret = valores.find((e, i) => { // Usado para procurar um valor e um indice (posição)
        if(e == pesquisa.value) { // Se algum valor do array for igual o valor colocado no input...
            resultado.innerHTML = `Valor encontrado: ${e} na posição ${i}` // =>
        }
    })

})
