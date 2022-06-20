var idade = 128
console.log (`Você tem ${idade}`)
if(idade < 16){
    console.log('Você não pode votar')
}else if(idade >= 129){
    console.log('Não aceitamos votos de imortais')
}else if(idade < 18 || idade >= 65){
    console.log('Voto opcional')
}else{
    console.log('Voto obrigatório')
}