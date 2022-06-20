var hora_atual = new Date()
var hora = hora_atual.getHours()
console.log(`Agora são extamente ${hora} horas`)
if(hora > 5 && hora < 12){
    console.log('Bom dia')
}else if(hora > 11 && hora < 18){
    console.log('Boa tarde')
}else if(hora >= 18 && hora <= 23){
    console.log('Boa noite')
}else{
    console.log('Boa madrugada')
}