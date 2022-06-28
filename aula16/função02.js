var f = function(n=1) {
    var fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }return fat
}

console.log(f(5))