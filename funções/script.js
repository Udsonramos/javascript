
    function parimpar(n) { //a função recebe um chamado com um parâmetro dentro
        if (n%2 == 0) { // a condição é se o número divido por 2 for igual à 0...
            return 'Par!' // Será par
        } else { //se não...
            return 'Impar!' // Será impar.
        }
    }
//Precisamos sempre colocar o chamado com o parâmtro depois da função
    
    var res = parimpar(5) //podemos definir uma váriável para criar um chamado com o parâmetro
    console.log(res) //E usamos o console pra aparecer o resultado lá da condição
    

    console.log(parimpar(6)) //também podemos simplesmente usar a função com o parâmetro no console.log que vai dar o mesmo resultado do código acima.



function soma(n1=0, n2=5) { //podemos também predefinir um valor para os parâmetros caso não seja colocado todos os parâmetros na chamada.
    return n1 + n2
}

console.log(soma(2)) //Aqui só tem um parâmetro definido, então o n2 receberá o valor de 5


let v = function(x) { //Também podemos colocar uma function dentro de uma variável
    return x*2
}

console.log(v(5))