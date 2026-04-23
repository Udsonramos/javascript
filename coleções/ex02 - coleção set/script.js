const colecao = new Set(['item1','item2','item3'])

colecao.add('item4')
colecao.add('item5')
colecao.add('item1')

colecao.delete('item3')

colecao.forEach((el,i)=>{
    console.log(el)
})

