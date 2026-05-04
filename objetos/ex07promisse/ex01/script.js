const numero = document.querySelector('#numero')

let p = new Promise((resolve,reject)=>{ //resvole é o parâmetro do resultado positivo, e o reject é o do negativo.
    let resultado = true
    let tempo = 3000

    setTimeout(()=>{
        if(resultado){
            resolve('Deu tudo certo')
        }else{
            reject('Deu tudo errado')
        }
    },tempo)
})

p.then((retorno)=>{ // .then serve pra quando der certo
    numero.innerHTML=retorno
    numero.classList.remove('erro')
    numero.classList.add('ok')
})

p.catch((retorno)=>{ // .catch serve para quando der errado
    numero.innerHTML = retorno
    numero.classList.add('erro')
    numero.classList.add('ok')
})

numero.innerHTML='processando...'