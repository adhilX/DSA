console.time('time')
function binarySearch(arr,val){

    let leftIndex= 0
    let rightIndex = arr.length-1
    
    while(leftIndex<=rightIndex){
      
      let mid = Math.floor((leftIndex+ rightIndex) /2)
      
    if(arr[mid]===val){
      return mid
    }
    if(arr[mid]<val){
      leftIndex = mid+1
    }else{
    rightIndex=mid-1
    }
  }
  return -1
}

console.log(binarySearch([2,3,4,5,6,7,8],8))
 console.timeEnd('time')
