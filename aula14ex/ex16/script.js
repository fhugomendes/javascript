function contar(){
    var ini = window.document.getElementById('inicio')
    var nIni = Number(ini.value)
    var fim = window.document.getElementById('fim')
    var nFim = Number(fim.value)
    var passo = window.document.getElementById('passo')
    var nPas = Number(passo.value)
    var res = window.document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = ('Insira todos os números!')
    }else{
        if(nPas == 0){
            window.alert('Passo Inválido! Considerando passo = 1')
            nPas = 1
        }
        while(nIni <= nFim){
            res.innerHTML += (` ${nIni} `)
            nIni += nPas 
            res.innerHTML += (`&#128073`)
            if (nIni == nFim){
                res.innerHTML += (` ${nIni} `)
                break
            }
            
        }
    res.innerHTML += (`&#127937`)
    }
}
