let colecao = new Map()

colecao.set("primeiro", 1)
colecao.set(2, "segundo")
colecao.set(10, 11)
colecao.set("oi","tchau")

colecao.delete(10)

console.log(colecao)

let pes = 12
if(colecao.has(pes)){
    console.log(`temos o valor ${pes} na coleção map`)
} else {
    console.log(`Não temos esse valor!`)
}
console.log(colecao.size)

colecao.forEach((el)=>{
    console.log(el)
})