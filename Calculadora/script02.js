class Calculadora{
    constructor(displayElement){
        this.display=displayElement //recebe o número que foi clicado
        this.limpar()
    }
    limpar(){
        this.valorAtual='0'
        this.valorAnterior='' //valor anterior serve de "gaveta" para armazenar o primeiro númnero colocado antes do operador
        this.operacao=undefined //sem nada, para receber a string de operadores
        this.houveResumo=false
        this.atualizarDisplay() //adiciona no display da tela. (no caso o 0)
    }
    adicionarNumero(numero){ //método para adicionar número no display da tela
        if(this.houveResumo){ //se o houveResumo for true...
            this.valorAtual=numero===','?'0,':numero //valorAtual recebe o número. Se for virgula, ele adiciona '0,5', se não ele adiciona o número no display
            this.houveResumo=false //muda pra false de novo, provavelmente isso impede de adicionar outro número
            this.atualizarDisplay() //Joga o resultado da condição lá no display (o número clicado ou o 0,)
            return
        }

        if(numero===','&&this.valorAtual.includes(',')) return; //Se o número for exatamente igual a virgula e o valor atual do display já ter uma vírgula, interrompa.

        if(this.valorAtual==='0'&&numero!==','){ //Se o valor atual do display for exatamente igual a 0 e não tiver vírgula...
            this.valorAtual=numero //ele vai adicionar o número no valorAtual
        }else{
            this.valorAtual+=numero //Se não, ele vai adicionar 0 ou ,
        }
        this.atualizarDisplay()//Adiciona os números no display da tela
    }
    definirOperacao(op){ //método para definir a operação, recebendo os operadores em string
        if(this.valorAtual==='')return; //Se o valorAtual for exatamente igual a nada, interrompa.
        if(this.valorAtual!==''){ //Se tiver algo...
            this.calcular() //Executa o método calcular.
        }
        this.operacao=op //recebe o operador
        this.valorAnterior=this.valorAtual //guarda o valor da tela para adicionar outro, sem que apareça todo o calculo
        this.valorAtual='' //o valorAtual fica sem nada para receber o novo número
    }
    calcular(){ //Método para juntar os números e operadores para calcular e jogar o resultado no display da tela
        let resultado; //variavel vazia pra receber o resultado

        const anterior = parseFloat(this.valorAnterior.replace(',','.')) //parseFloat converte a string em number
        const atual = parseFloat(this.valorAtual.replace(',','.')) //.replace() muda o primeiro valor para o segundo

        if(isNaN(anterior)||isNaN(atual))return; //Se não for número no atual ou no anterior, interrompa.

        const acoes = { //objeto que converte as strings em operadores, recebe parâmetros e calcula eles.
            '+': (a,b) => a+b,
            '-': (a,b) => a-b,
            'x': (a,b) => a*b,
            '/': (a,b) => a/b,
        }

        if(acoes[this.operacao]){ //Se o acoes tiver uma string igual a que foi digitada...
            resultado = acoes[this.operacao](anterior,atual) //resultado recebe o cálculo já feito, com o operador e o número do valor anterior e o atual.

            this.valorAtual=resultado.toString().replace('.',',') //converte para string, muda de novo para vírgula e joga para o valorAtual
            this.operacao=undefined //remove o operador guardado
            this.valorAnterior='' //remove o número guardado
            this.houveResumo=true
            this.atualizarDisplay() //joga no display da tela.
        }
    }

    atualizarDisplay(){ //Método para jogar os valores no display da tela.
        this.display.innerText=this.valorAtual //o conteúdo do display recebe o número do valorAtual.
    }
}

const display = document.querySelector('#display')
const ac = document.querySelector('#ac')
const copy = document.querySelector('#copy')
const res = document.querySelector('#igual')
const virgula = document.querySelector('#virgula')

const num = document.querySelectorAll('.num')
const op = document.querySelectorAll('.op')

const calc = new Calculadora(display) // Classe calculadora sendo instanciada com a div display

num.forEach((n)=>{ //Não precisei criar uma variável com array pq o forEach percorreu todas as divs(números)
 n.addEventListener('click',(evt)=>{
    calc.adicionarNumero(evt.target.innerText) //Aqui temos um método criado para adicionar um número no display
 }) // O .target.innerText pega o texto dentro das divs que forem criadas.
})

op.forEach((o)=>{
    o.addEventListener('click',(evt)=>{
        calc.definirOperacao(evt.target.innerText)
    })
})

ac.addEventListener('click',()=>{
    calc.limpar() //Um método que serve só para limpar o display
})

res.addEventListener('click',()=>{
    calc.calcular() //Um método que serve só para calcular todos os valores recebidos
})