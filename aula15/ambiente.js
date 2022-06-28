let num = [4, 1, 7, 5, 9]
num.push(6)
console.log(num)
console.log(`O número na primeira posição é: ${num[0]}`)
console.log(`O vetor tem o tamanho de ${num.length} posições`)
console.log(`Vetor com  os números ordenados: ${num.sort()}`)

for(let pos in num){
    console.log(`Posição: ${pos}; Número: ${num[pos]}`)
}

let numF = num.indexOf(7)
if (numF == -1){
    console.log('Número não encontrado')
}else{
    console.log(`o número está na posição ${numF}`)
}