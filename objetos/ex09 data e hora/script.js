const div_data = document.getElementById('divData')
const div_hora = document.getElementById('divhora')
const horaDoAlarme = document.getElementById("copyAlarme")
const inputNumero = document.getElementById("inumero")
const botaoAtivar = document.getElementById("btnAtivar")
const botaoParar = document.getElementById("btnParar")

let timestampAtual = null //Usado para guardar o timestamp
let timestampAlarme = null //Usado para guardar a soma do timestamp com o valor do input convertido em timestamp
let alarmeAtivado = false //Usado para a condição do toque do alarme
let alarmeTocando = false //Usado para a condição do toque do alarme

const despertador = new Audio("sirene.mp3") // guarda um áudio
despertador.loop = -1 // -1 faz ele tocar infinitamente

botaoAtivar.addEventListener("click",()=>{
    timestampAtual = Date.now() //guardou o timestamp
    timestampAlarme = timestampAtual + (inputNumero.value * 1000) //O professor é muito sábio de pegar o valor do input, multiplicar por 1000 (o timestamp funciona em milisegundos) e somar com o timestamp do sistema, pois o timestamp é um valor inteiro, em milisegundos desde 1970.
    alarmeAtivado = true
    const dataAlarme = new Date(timestampAlarme) //Aqui o new Date guarda o valor do timestamp, o convertendo em tempo novamente
    horaDoAlarme.innerHTML = `Hora do Alarme:${dataAlarme.toLocaleTimeString()}` // .toLocaleTimeString converte ele em 00:00:00.
})
// O botão parar serve pra desativar o alarme, tirar a copy que vai para junto para o "Hora do Alarme:" e faz o áudio do alarme parar de tocar.
botaoParar.addEventListener("click",()=>{
    alarmeAtivado = false
    alarmeTocando = false //Isso aqui desativa o alarme tocando
    horaDoAlarme.innerHTML = "Hora do Alarme:"
    inputNumero.value = "0"
    // time.classList.remove("alarme")
    despertador.pause();
    despertador.currentTime = 0;
})


// Tempo rolando em tempo real
const tempoRolando =()=>{
    const data = new Date()
    div_data.innerHTML = data.toLocaleDateString()
    div_hora.innerHTML = data.toLocaleTimeString()

    if(alarmeAtivado && !alarmeTocando){ // (Aqui se aplica a condição para o alarme tocar) Se o alarmeAtivado for true o alarmeTocando for false, vai liberar mais uma condição.
        if(data.getTime() >= timestampAlarme){ // Sagacidade do professor novamente, ele usa a condição com o timestamp, não a hora em si.
            alarmeTocando = true
            despertador.play()
            // time.classList.add("alarme")
        }
    }
}
const tempo = setInterval(tempoRolando,100)

const data = new Date()