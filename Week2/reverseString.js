function reverse(str){

    let stack =[]

    let arr= str.split(' ')
    for(let i =0 ; i < arr.length; i++){
        stack.push(arr[i].trim())
    }
    let result =''
    while(stack.length >0){
        result += stack.pop()+ ' '
    }
    return result.trim()
}
console.log(reverse('hello how are you'))