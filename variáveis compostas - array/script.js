
let num = [8, 4, 6] //Variáveis compostas ou arrays são variáveis que suportam mais de um valor dentro dela. Os valores são inserido dentro de [] e separado por vírgulas (,).

num.push(10) //esse código cria um elemento e coloca ele como último dentro da array

console.log(num.sort()) //.sort() organiza os elementos por ordem de A a Z

console.log(num.length) //.length duz quantos elementos tem dentro da array

console.log(`O segundo número é ${num[1]}`) // Podemos usar [] para selecionar um elemento em específico. A contagem começa a partir de 0



let nume = [2, 9, 1, 7]

for(let c = 0;c < nume.length;c++) {
    console.log(nume[c]) // Podemos aplicar o exercício anterior de loop usando o for.
}



for(let c in num) { // Aqui usamos o for de forma mais simples e com a mesma eficiência que o outro, trazendo mesmo resultado.
    console.log(num[c]) 
}


console.log(num.indexOf(1)) // .indexOf() localiza em qual posição o elemento inserido no () está