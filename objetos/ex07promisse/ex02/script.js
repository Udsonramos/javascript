const numero = document.querySelector('#numero')
const btn_promessa = document.querySelector('#btn_promessa')

btn_promessa.addEventListener('click',()=>{
    numero.innerHTML='processando...'
    promessa()
})

const promessa = ()=>{
    let p = new Promise((resolve,reject)=>{
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

    .then((retorno)=>{
        numero.innerHTML=retorno
        numero.classList.remove('erro')
        numero.classList.add('ok')
    })

    .catch((retorno)=>{
        numero.innerHTML = retorno
        numero.classList.add('erro')
        numero.classList.add('ok')
    })
}


numero.innerHTML='Aguardando.'