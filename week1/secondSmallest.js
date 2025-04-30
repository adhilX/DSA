function secLargerst(arr){
largerst =0
seclarge=0

for(i=0;i<arr.length;i++){
  if(arr[i]>largerst){
    seclarge = largerst
    largerst = arr[i]
  }
  }
  return seclarge
}

console.log(secLargerst([3,4,5,6,7,8,9,0]))
