/*
    const div_relogio = document.querySelector("#div_relogio")

    const relogio =()=>{
        const data = new Date()

        let hora = data.getHours()
        hora = hora < 10? `0${hora}`:hora

        let minuto = data.getMinutes()
        minuto = minuto < 0? `0${minuto}`:minuto

        let segundo = data.getSeconds()
        segundo = segundo < 0? `0${segundo}`:segundo

        let hora_completa = `${hora}:${minuto}:${segundo}`
        div_relogio.innerHTML = hora_completa
    }

    const intervalo = setInterval(relogio,1000)
*/

const div_relogio = document.getElementById("div_relogio")

const relogio =()=>{
    const data = new Date()
    div_relogio.innerHTML = data.toLocaleTimeString()
}

const intervalo = setInterval(relogio,100)