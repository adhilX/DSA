// let arr1 = [3,4,6,7,8]
// let arr2 = [1,2,3,4,5]


// let arr =[]

// let len1 = arr1.length 
// let len2 = arr2.length
// let i=0 , j=0
// while(len1 > i && len2 > j){

//     if(arr1[i] < arr2[j]){
//         arr.push(arr1[i])
//         i++
//     }
//     else{
//         arr.push(arr2[j])
//         j++
//     }
// }
// while(len1!=i){
//     arr.push(arr1[i])
//     i++
// }

// while(len2!=j){
//     arr.push(arr2[j])
//     j++
// }
// console.log(arr)


// function bubble(arr){
//     for(let i = 0 ; i< arr.length-1 ; i++){
//         for(let j = 0 ; j < arr.length-1-i ; j++){
//             if(arr[j]<arr[j+1]){
//                 [arr[j],arr[j+1]]= [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }
// console.log(bubble([2,4,6,7,8,1,3]))

// function selection(arr){
//     for(let i = 0 ; i< arr.length-1 ; i++){
//         let temp = i
//         for(let j = i +1 ; j< arr.length; j++){
//             if(arr[j]< arr[temp]){
//                 temp= j
//             }
//         }
//     if(temp!= i){
//         [arr[temp],arr[i]]= [arr[i],arr[temp]]
//     }
// }
// return arr
// }
// console.log(selection([3,4,5,6,5,4,3,2]))

// function insertion(arr){
//     for(let i= 1 ; i < arr.length ; i++){
//         let temp = arr[i]
//         let j= i-1

//         while(j >= 0 && arr[j]>temp){
//         arr[j+1]= arr[j]
//         j--
//         }
//         arr[j+1]= temp
//     }
//     return arr
// }

// console.log(insertion([2,3,4|,5,1,2]))

// function mergeSort(arr){
//     if(arr.length < 2)return arr
//     let mid = Math.floor(arr.length/2)
//     let left = mergeSort(arr.slice(0,mid))
//     let right = mergeSort(arr.slice(mid))

//     return merge(left,right)
// }

// function merge(left,right){
//     let result = []

//     while(left.length && right.length){
//         if(left[0] < right[0]){
//             result.push(left.shift())
//         }  else{
//             result.push(right.shift())
//         }
//     }
//     return [...result,...left,...right]
// }

// console.log(mergeSort([5,3,7,5,1]))


// function quickSort(arr){
//     if(arr.length < 2)return arr
//     let pivot = arr[0]
//     let left=[]
//     let right=[]
       
//     for(let i = 1 ;i < arr.length ; i++){
//         if(arr[i]> pivot){
//             right.push(arr[i])
//         }
//         else{
//             left.push(arr[i])
//         }
//     }
//      return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort([3,4,5,6,1,2,3]))


// function selection(arr){
//     for(let i =0 ; i < arr.length ; i++){
//          let temp = i


//          for(j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[temp]){
//                 temp =j
//             }
//          }
    

//     if(temp!= i){
//         [arr[i],arr[temp]]= [arr[temp],arr[i]]
//     }
// }
//     return arr
// }

// console.log(selection([4,5,6,71,2,3]))

//===============================================================================================================

// function bubble(arr){
//     for(let i =0 ; i< arr.length ; i++){
//         for(let j =i+1 ;j<arr.length; j++ ){
//             if(arr[i]>arr[j]){
//                 [arr[j],arr[i]]= [arr[i],arr[j]]
//             }
//         }
//     }
//     return arr
// }
// console.log(bubble([4,3,4,5,6,7]))

// function selection(arr){
//     for(let i = 0 ; i< arr.length-1;i++){
//         let temp = arr[i]

//         for(let j = 0 ; j< arr.length-1-i;j++){
//             if(temp<arr[j]){
//                 [arr[j],temp]= [temp,arr[j]]
//             }
//         }
//     }
//     return arr
// }

// console.log(selection([4,2,3,4,5,6]))


// function insertion(arr){
//     for(let i = 1 ; i < arr.length; i++){
//         let key = arr[i]
//          let j = i-1
//          while(j>=0 && arr[j]>key){
//             arr[j+1]= arr[j]
//             j--
//          }
//          arr[j+1]=key
//     }
//     return arr
// }
// console.log(insertion([3,4,2,6,7,1]))

// function mergeSort(arr){
//  if(arr.length < 2)return arr
//     let mid = Math.floor(arr.length/2)

//     let left = mergeSort(arr.slice(0,mid))
//     let right = mergeSort(arr.slice(mid))

//     return merge(left,right)
// }


// function merge(left,right){

//     let result = []

//     while(left.length && right.length){
//         if(left[0]< right[0]){
//             result.push(left.shift())
//         }else{
//         result.push(right.shift())
//     }}
//     return [...result,...left,...right]
// }

// console.log(mergeSort([3,4,56,1,3]))

// function quickSort(arr){
//     if(arr.length< 2)return arr
//     let pivot = arr[0]
//      let left = []
//       let right = [] 
//     for(let i=1 ; i< arr.length ; i++){
//    if ( arr[i]< pivot){
//     left.push(arr[i])
//    }else{
//     right.push(arr[i])
//    }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort([3,4,4,5,6,7,1,2]))


// class hashTable{
//     constructor(size =74){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//       let total = 0 
//       for(let i = 0 ; i < key.lenght ; i++){
//         total+= charCodeAt(i)
//       }
//       return total % this.size
//     }


//     set(key,value){
//         let index = this.hash(key)

//         let bucket = this.table[index]
//         if(!bucket){
//             this.table[index]= [[key,value]]
//         }else{
//             let sameKeyItem  = bucket.find(item => item[0]=== key)
//             if(sameKeyItem){
//               sameKeyItem[1]= value
//             }
//             bucket.push([key,value])

//         }
//     }
//     get(key){
//         let index = this.hash(key)

//         let bucket = this.table[index]
//         if(bucket){
//   let sameKeyItem = bucket.find(item=> item[0]==key)
//        if(sameKeyItem){
//         return sameKeyItem[1]
//        }
//         }
//         return undefined

// }

// remove(key){
//     let index = this.hash(key)

//     let bucket = this.table[index]
//     if(bucket){
// let sameKeyItem = bucket.find(item=> item[0]==key)
//    if(sameKeyItem){
//     console.log(bucket.indexOf(sameKeyItem),'hhhhhhhhhhhh')
//     return sameKeyItem.splice(bucket.indexOf(sameKeyItem),2)
//    }
//     }
//     return undefined

// }
// display(){
//     console.log(this.table)
// }
// }

// let ff = new hashTable()
// ff.set('name','chinnu')
// ff.set('name','adhil')
// ff.remove('name')
// console.log(ff.get('name'))
// ff.display()


// class Stack{
//     constructor(){
//         this.stack=[]
//     }
//     push(value){
//        this.stack.push(value)
//     }

//     pop(){
//         if(this.isEmpy){
//             return 'stack underflow'
//         }
//         return this.stack.pop()
//     }

//     top(){
//         return this.stack[this.stack.length-1]
//     }
    
// }

// let stack = new Stack()
// stack.push(5)
// stack.push(3)
// stack.push(4)
// stack.push(6)
// console.log(stack.pop())
// console.log(stack.top())


// class Queue{
//     constructor(){
//         this.queue= []
//     }

//     enqueue(value){
//         this.queue.push(value)
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return 'queue underflow'
//         }

//         return this.queue.shift()
//     }

//     front(){
//         return this.queue[0]
//     }
//     isEmpty()
// {
//     return this.queue.length==0
// }}

// let queue= new Queue()
// queue.enqueue(3)
// queue.enqueue(8)
// queue.enqueue(4)
// queue.enqueue(5)

// console.log(queue.dequeue())
// console.log(queue.front())


class Stackusingqueue{
    constructor(){
        this.stack1=[]
        this.stack2 =[]
    }
    push(value){
        let size= this.stack1.length
   this.stack1.push(value)
        while(size>1){
            this.stack1.push(this.stack1.shift())
            size--
        }
    }

    pop(){
        if(this.isEmpty())return 'queuee underflow'
        return this.stack1.shift()
    }
    top(){
        if(this.isEmpty())return 'queuee underflow'
       return this.stack1[0]
    }

    isEmpty(){
        return this.stack1.length === 0
    }
    display(){
        console.log(this.stack1)
    }
}

let ss= new Stackusingqueue()
ss.push(3)
ss.push(7)
ss.push(1)
ss.push(4)
console.log(ss.pop())
console.log(ss.top())