/*
    Operadores:

    tipos de operadores
    - aritméticos
    - atribuição
    - relacionais
    - lógicos
    - ternário

    aritméticos
    +
    -
    *
    /
    % 
    ** (potência)

    operadores binários são que precisamos de 2 elementos para a operação
    ex.: 5 + 2

    precedência (ordem)
    - ()
    - **
    - *, /, %, +, -
    - +, -

*/

var a = 5 + 3 //8
var b = a % 5 //3
var c = 5 * b ** 2 //45

/*
    Auto atribuições

    ele pode se colocar na própria variável pra fazer um calculo
*/

var n = 3
n = n + 4
n = n - 5
n = n * 4

//podemos simplificar 

var x = 2
x += 3

// operador de incremento simplifica mais ainda:

var x = 4
x++

/*
    relacionais

    >
    <
    >=
    <=
    ==
    !=

    5 > 2 = true
    7 < 4 = false
    8 >= 8 = true
    9 <= 7 = false
    5 == 5 = true (== é sinal de igual na programação)
    4 != 4 = false (!= é sinal de diferente)
    5 === '5' = false (=== é sinal de extamente igual)
    5 !== '5' = true (!== é sinal de totalmente diferente)
*/

/*
    lógicos

    ! negação
    && conjunção
    || disjunção

     5 > 2 && 5 == 2 = false
     6 < 7 || 2 === '2' = true

*/

/*
    Ordem de usar cada operador no código

    () ** /

    > < >=
    !
    &&
    ||
*/

/*
    Ternário

    ?
    :

    Isso parece muito com a lógica de if e else, mas de uma forma muito simples.

    var media = 5.5
    media >= 6? 'aprovado' : 'reprovado'
    "média é maior ou igual a 6? Se sim, 'aprovado', se não, 'reprovado'."
*/

//operador spread

/*var n1 = [10, 20, 30]
var n2 = [11, 22, 33, 44]
var n3 = [...n1] //esses ... repetem o array de var n1

console.log(`n3: ${n3}`)*/

/*const jogador1 = {nome: 'Udson', vida: 200, força: 300}
const jogador2 = {nome: 'Gui', vida: 250, magia: 500}
const jogador3 = {...jogador1, ...jogador2}

console.log(jogador3) //console não adiciona os dois const, mas sim o último e ele replica as infos que não estão repetidas nos objetos*/

/*const soma = (v1, v2) => v1 + v2

let valores = [2, 5]

console.log(soma(...valores)) //... repete os dois valores do array, joga pra função e retorna somada*/

////////////////////////////////

// FUNÇÕES MAP
// Ele serve para percorrer todos os elementos dentro do array e mostrar todos, ao invés de fazer como fazemos com o for, que escolhemos até aonde queremos ir

const curso = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React']

curso.map((el, i) => { //podemos declarar até 3 parâmetros: O primeiro é o próprio elemento e o segundo é o índice(posição)
    console.log(`Curso ${el} - Posição: ${i}`)
})


const converterInt = (e) => parseInt(e) //parseInt converte string para number

const valores = ['1', '2', '3', '4'].map(converterInt)

console.log(valores)


const filmes = ['Homem Aranha: de volta ao lar', 'Vingadores ultimato', 'Venom: Tempo de Carnificina']

filmes.map((e) => {
    console.log(`Filme disponível: ${e}`)
})


////////////////////////////

