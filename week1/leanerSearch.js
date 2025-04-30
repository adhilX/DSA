
console.time('index')
function findIndex(arr,num){
    for(i=0; i<arr.length;i++){
        if(arr[i]==num){
            return i
        }
    
    }
    return -1
}

console.log(findIndex([3,4,5,6,7,8,9,7,6,5,4],6))
console.timeEnd('index')