var idade = 63
console.log(`Sua idade é de ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 62) {
            console.log('Voto opcional')
        } else {
            console.log('Voto obrigatório')
        }