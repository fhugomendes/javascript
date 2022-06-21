function iniciar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `O horário atual é de ${hora} horas`
    if(hora > 5 && hora < 12){
        document.body.style.background = '#fe8f57'
        msg.innerHTML += '<br>Bom Dia!'
    }else if(hora > 11 && hora < 18){
        document.body.style.background = '#673c46'
        msg.innerHTML += '<br>Boa Tarde!'
        img.innerHTML = '<img src="imagens/tarde.png" alt="Foto de Tarde">'
    }else{
        document.body.style.background = '#005b90'
        msg.innerHTML += '<br>Boa Noite!'
        img.innerHTML = '<img src="imagens/noite.png" alt="Foto de Noite">'
    }
}
