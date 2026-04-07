/*
    var plano = 'e'

    plano = plano.toUpperCase()//Antes da var chegar no switch, ele muda pra maiúsculo, então mesmo que eu coloque a var como minúsculo, ele vai transformar em maíusculo antes.

    switch(plano) {
        case 'B':
            console.log('Básico - Acesso limitado')
            break
        case 'P':
            console.log('Premium - Acesso Completo')
            break
        case 'E':
            console.log('Empresarial - Acesso Completo + Suporte prioritário')
            break
        default:
            console.log('Plano inválido!')
    }
*/

var item = 'manga'

switch(item) {
    case 'maçã':
    case 'banana':
    case 'morango':
        console.log('Setor de Frutas')
    break
    case 'alface':
    case 'espinafre':
    case 'acelga':
        console.log('Setor de Verduras')
    break
    case 'cenoura':
    case 'batata':
        console.log('Setor de Legumes')
    break
    default:
        console.log('Item não encontrado')
}