function verificar(){
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano = window.document.getElementById('anonasc')  
    var res = window.document.getElementById('res')
    if(ano.value.length == 0 || Number(ano.value) > ano_atual || Number(ano.value) < 1900){
        window.alert('ERRO! Digite um ano válido')
    }else {
        var fsex = window.document.getElementsByName('psex')
        var idade = ano_atual - Number(ano.value)
        var genero = ''
        var fasevida = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            window.document.body.style.background = 'rgb(70, 142, 236)'
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                fasevida = 'Menino'
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            }else if (idade < 20){
                fasevida = 'Jovem'
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            }else if (idade < 50){
                fasevida = 'Adulto'
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            }else{
                fasevida = 'Idoso'
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
            res.innerHTML = `É um ${fasevida} de ${idade} anos`
        }else if(fsex[1].checked){
            window.document.body.style.background = 'pink'
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                fasevida = 'Menina'
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            }else if (idade < 20){
                fasevida = 'Jovem'
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            }else if (idade < 50){
                fasevida = 'Adulta'
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            }else {
                fasevida = 'Idosa'
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
            res.innerHTML = `É uma ${fasevida} de ${idade} anos` 
        }
        }
        res.appendChild(img)  
}
