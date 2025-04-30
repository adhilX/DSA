

const arr=[3,4,5,6,7,8,9,0]
  const ee=arr.slice(3,5)
console.log(arr,ee
)




//------------------------------------------------------------------------------------------

function sort(arr){
let temp=0
let dd = arr.length-1
  for(i=0;i<(arr.length)/2;i++){
        temp = arr[i]
        arr[i]=arr[dd]
        arr[dd]= temp
        dd--;
   }
return arr
}

console.log(sort( [3,4,5,6,7,8,9,0]))


