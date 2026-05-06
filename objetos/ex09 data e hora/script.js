const div_data = document.getElementById('divData')
const div_hora = document.getElementById('divhora')
const horaDoAlarme = document.getElementById("copyAlarme")
const inputNumero = document.getElementById("inumero")
const botaoAtivar = document.getElementById("btnAtivar")
const botaoParar = document.getElementById("btnParar")

let timestampAtual = null
let timestampAlarme = null
let alarmeAtivado = false
let alarmeTocando = false

const despertador = new Audio("sirene.mp3")
despertador.loop = -1

botaoAtivar.addEventListener("click",()=>{
    timestampAtual = Date.now()
    timestampAlarme = timestampAtual + (inputNumero.value * 1000)
    alarmeAtivado = true
    const dataAlarme = new Date(timestampAlarme)
    horaDoAlarme.innerHTML = `Hora do Alarme:${dataAlarme.toLocaleTimeString()}`
})

botaoParar.addEventListener("click",()=>{
    alarmeAtivado = false
    alarmeTocando = false
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

    if(alarmeAtivado && !alarmeTocando){
        if(data.getTime() >= timestampAlarme){
            alarmeTocando = true
            despertador.play()
            // time.classList.add("alarme")
        }
    }
}
const tempo = setInterval(tempoRolando,100)

const data = new Date()