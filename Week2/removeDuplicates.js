let arr= [3,4,5,6,7,5,4,3,5]
let map ={}

let result = []

for(let i = 0 ; i < arr.length ; i++){
    if(!map[arr[i]]){
        map[arr[i]]=true
        result.push(arr[i])
    }
}
console.log(result)