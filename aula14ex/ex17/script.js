function Tabuada(){
    let num = window.document.getElementById('txtn')
    let res = window.document.getElementById('res')
    if(num.value.length == 0 ){
        window.alert('ERRO! Insira um número')
    }else {
        let n = Number(num.value)
        let c = 1
        res.innerHTML = ''
        while (c <= 10){ // n = NUMERO; c = CONTADOR; r = RESULTADO
            let r = n * c
            let item = window.document.createElement('option')
            item.text += (`${n} x ${c} = ${r}`)
            res.appendChild(item)
            c++
        }
    }
}
