console.time('start')
function fobnacii(n){
    if(n<2)return n

    return fobnacii(n-1) + fobnacii(n-2)
}

console.log(fobnacii(5))
console.timeEnd('start')
