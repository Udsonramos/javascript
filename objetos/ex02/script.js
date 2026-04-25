const botao = document.querySelector("#botaoadd")
const nome = document.querySelector("#inome")
const idade = document.querySelector("#iidade")
const resultado = document.querySelector("#resultado")

let valores = []
resultado.innerHTML = valores

class Dados {
    constructor(pnome, pidade){
        this.nome = pnome
        this.idade = pidade
    }
    getNome(){
        return this.nome
    }
    getIdade(){
        return this.idade
    }
    setNome(nome){
        this.nome = nome
    }
    setIdade(idade){
        this.idade = idade
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
    }
}

function addDados(){
    resultado.innerHTML=''
    valores.map((n)=>{
        let p = document.createElement('p')
        p.setAttribute('id', 'res')
        p.innerHTML = `Nome: ${n.getNome()}<br>Idade: ${n.getIdade()}`
        resultado.appendChild(p)
    })
}

botao.addEventListener("click", () => {
    let p1 = new Dados(nome.value, Number(idade.value))
    valores.push(p1)
    addDados()
    nome.value=''
    idade.value=''
})