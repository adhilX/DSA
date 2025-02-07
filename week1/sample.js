//+++++++++++++++++++++++++++recurtion ++++++++++++++++++++++++++++++++++

// console.time('start')
// function fobnacii(n){
//     if(n<2)return n

//     return fobnacii(n-1) + fobnacii(n-2)
// }

// console.log(fobnacii(5))
// console.timeEnd('start')


//----------------------------------------------------------------


//+++++++++++++++factorial++++++++++++++++++++++++++++++++++++++++++++

// console.time('time')
// function factorial(n){

//     if(n===0) return 1
//     return n * factorial(n-1)

// }
// console.log(factorial(3))  
// console.timeEnd('time')

  //==============================================================================

// console.time('loop')
// function factorialIterative(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorialIterative(3)); 
// console.timeEnd('loop')

//------------------------------------------------------------------------------


// ++++++++++++++++ leaner search ++++++++++++++++++++++++++++++++++++++

// console.time('index')
// function findIndex(arr,num){
//     for(i=0; i<arr.length;i++){
//         if(arr[i]==num){
//             return i
//         }
    
//     }
//     return -1
// }

// console.log(findIndex([3,4,5,6,7,8,9,7,6,5,4],6))
// console.timeEnd('index')


//---------------------------------------------------------------------------

//++++++++++++++++++++++++++== binaray Search +++++++++++++++++++++++++++++

// console.time('time')
// function binarySearch(arr,val){

//     let leftIndex= 0
//     let rightIndex = arr.length-1
    
//     while(leftIndex<=rightIndex){
      
//       let mid = Math.floor((leftIndex+ rightIndex) /2)
      
//     if(arr[mid]===val){
//       return mid
//     }
//     if(arr[mid]<val){
//       leftIndex = mid+1
//     }else{
//     rightIndex=mid-1
//     }
//   }
//   return -1
// }

// console.log(binarySearch([2,3,4,5,6,7,8],8))
//  console.timeEnd('time')

//-----------------------------------------------------------------------------------------

// const arr=[3,4,5,6,7,8,9,0]
//   const ee=arr.slice(3,5)
// console.log(arr,ee
// )




//------------------------------------------------------------------------------------------

// function sort(arr){
// let temp=0
// let dd = arr.length-1
//   for(i=0;i<(arr.length)/2;i++){
//         temp = arr[i]
//         arr[i]=arr[dd]
//         arr[dd]= temp
//         dd--;
//    }
// return arr
// }

// console.log(sort( [3,4,5,6,7,8,9,0]))



//----------------------------------------------------------------------------------------------

// function secLargerst(arr){
// largerst =0
// seclarge=0

// for(i=0;i<arr.length;i++){
//   if(arr[i]>largerst){
//     seclarge = largerst
//     largerst = arr[i]
//   }
//   }
//   return seclarge
// }

// console.log(secLargerst([3,4,5,6,7,8,9,0]))



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==

// class node {
//   constructor(data) {
//    this.data= data
//    this.next= null 
//   }
// }


// class singlyLinkedList{
//   constructor(){
//     this.head= null
//   }
  
//   fromArray(arr){
//     arr.forEach(value => this.insertAtEnd(value));
// }
// insertAtBeginning(data){
//   let newNode = new node(data)
//   newNode.next= this.head
//   this.head= newNode
// }

//  insertAtEnd(data){
//   let newNode = new node(data)
//   if(!this.head){
//     this.head= newNode
//     return
//   }
//   let temp = this.head
//   while(temp.next){
//     temp = temp.next

//   }temp.next= newNode
// }


// //delete a node by value

// deleteNode(value){
//   if(!this.head)return
//   if(this.head.data===value){
//     this.head= this.head.next
//     return
//   }
//   let temp = this.head
//   while (temp.next && temp.next.data!==value){
//     temp= temp.next;
//   }
//    if(temp.next){
//     temp.next = temp.next.next
//    }
// }

// printList(){
//   let temp = this.head
//   let result = []
//   while(temp){
//     result.push(temp.data)
//     temp= temp.next
//   }
//   console.log(result.join(' -> '))
// }
// }

// let list = new singlyLinkedList()

//  list.insertAtBeginning(0)
//  list.insertAtBeginning(6)
//  list.fromArray([3,4,5,6,78])
//  list.insertAtEnd(1)
//  list.deleteNode(4)
//  list.printList()
