/*
var tempo = 29

if (tempo >= 30) {
    console.log('Está quente!')
} else {
    console.log('Está frio!')
}
*/
/*
var tempo = 32

if (tempo < 21) {
    console.log('muito frio!')
} else if (tempo > 22 || tempo < 28) {
    console.log('Está um pouco frio...')
    } else if (tempo > 29 && tempo < 35) {
        console.log('Está ficando calor.')
    } else {
        console.log('Está muito calor!')
    }
*/

var estacao = 'sol' //Os valores que são colocados aqui precisam estar nas possibilidades de case.


switch(estacao) {
    case 'sol':
        console.log('É verão')
        break
    case 'frio':
            console.log('É inverno')
        break
    case 'chuva':
            console.log('É outono')
            break
    case 'fresco':
            console.log('É primavera')
        break
    default:
        console.log('ERRO')
        break
}