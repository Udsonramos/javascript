const array = document.querySelector("#array")
const pesquisa = document.querySelector("#ipreencher")
const resultado = document.querySelector("#resultado")
const botao = document.querySelector("#btnpesquisar")

const valores = [9, 5, 4, 6, 10]
array.innerHTML = `[${valores}]`

let aux = []

botao.addEventListener("click",() => {
    const soma = valores.reduce((anterior, atual, indice, array)=>{ //reduce tem um valor a mais no parâmetro, o valor anterior
        aux.push(atual)
        return atual + anterior
    })
    resultado.innerHTML = `${soma}`
})