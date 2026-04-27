const textnome = document.querySelector("#inome")
const textidade = document.querySelector("#iidade")
const resultado = document.querySelector("#resultado")
const botao = document.querySelector("#botaoadd")


const pessoa = {
    nome: '',
    idade: '',
    getNome:function() {
        return this.nome
    },
    getIdade:function() {
        return this.idade
    },
    setNome:function(nome) {
        this.nome = nome
    },
    setIdade:function(idade) {
        this.idade = idade
    }
}

function addDados() {
    const p = document.createElement("p")
    p.innerHTML = `Nome: ${pessoa.getNome()}<br> Idade: ${pessoa.getIdade()}`
    resultado.appendChild(p)
    console.log(p)
}

botao.addEventListener("click",() => {

    if(textnome.value.length == 0 && textnome.value.length == 0) {
        alert("Preencha os dados!")
    } else {
        pessoa.setNome(textnome.value)
        pessoa.setIdade(textidade.value)

        addDados()

        textnome.innerHTML = ""
        textidade.innerHTML = ''
        textnome.focus()
    }
})