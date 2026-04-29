const Nave = function(energia){ //função construtra com parâmetro
    this.energia = energia
    this.disparos = 3
}

const n1 = new Nave(100) //função sendo instanciada

Nave.prototype.vidas =  2 //Aqui o prototype cria a proriedade vidas para a função
Nave.prototype.disparar = function(){ //Aqui o prototype cria um método para a função
    if(this.disparos>0)
        this.disparos--
}

n1.disparar()

console.log(Nave)
console.log(n1)
console.log(n1.disparos)
console.log(n1.vidas) //aqui o valor de vidas aparece dentro da funçã n1, que foi criada e incluída através do prototype.