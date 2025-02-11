

function mergString(str1,str2){
let result = ''
let len1 = str1.length 
let len2 = str2.length 

const maxLength = Math.max(len1,len2)

for(i = 0 ; i < maxLength ; i++){
    if(i < len2 )result += str2[i]
    if(i < len1 )result += str1[i]
}
   return result
}
let str1 = 'abcd'
let str2  = 'pqurstuv'
console.log(mergString(str1,str2))
