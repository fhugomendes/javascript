function adicionar(){
    let nums = []
    let txtn = window.document.getElementById('txtnum')
    let n = Number(txtn.value)
    let res = window.document.getElementById('res')
    if (txtn.value.length == 0){
        window.alert('ERRO! Insira um número')
    }else{
        if (n > 100 || n < 1){
            window.alert('ERRO! Insira um número válido')
        }else {
            let item = window.document.createElement('option')
            if (nums.indexOf(n) == -1){
                item.text = `Número ${n} adicionado`
                res.appendChild(item)
                nums.push(n)
            }else{
                window.alert('Este número ja foi adicionado anteriormente')
            }
            console.log(nums)
        }
    }
}