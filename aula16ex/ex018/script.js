let num = window.document.getElementById('txtnum')
let lista = window.document.getElementById('flista')
let res = window.document.getElementById('res')
let val = []

function entreNum(n){
    if (n >= 1 && n <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(n) != -1){
        return true
    }else {
        return false
    }
}

function adicionar(){
    if (num.value.length == 0){
        window.alert('ERRO! Insira um Número.')
    }else{
        if (entreNum(Number(num.value) && !inLista(Number(num.value), val))){
            let item = window.document.createElement('option')
            item.text = `Valor ${num.value} adicionado`
            lista.appendChild(item)
            val.push(Number(num.value))
            res.innerHTML = ''
        }else{
            if (entreNum(Number(num.value) == false)){
                window.alert('ERRO! Digite um número entre 1 e 100.')
            }else{
                window.alert('ERRO! Esse número já foi adicionado.')
            }
        }
        num.value = ''
        num.focus()
    }
}

function finalizar(){
    if (val.length == 0){
        window.alert('ERRO! Adicione os números primeiro.')
    }else{
        let soma = 0

        for (let i = 0; i < val.length; i++){
            soma += val[i]
        }
        res.innerHTML = ``
        res.innerHTML += `Ao todo, temos ${val.length} números cadastrados.`
        res.innerHTML += `<br>O maior número cadastrado foi: ${Math.max(...val)}`
        res.innerHTML += `<br>O menor número cadastrado foi: ${Math.min(...val)}`
        res.innerHTML += `<br>A soma dos números é: ${soma}`
        res.innerHTML += `<br>A média dos números é: ${soma / val.length}`}
}