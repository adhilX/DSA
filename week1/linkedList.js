
class node {
  constructor(data) {
   this.data= data
   this.next= null 
  }
}

class singlyLinkedList{
  constructor(){
    this.head= null
  }
  
  fromArray(arr){
    arr.forEach(value => this.insertAtEnd(value));
}
insertAtBeginning(data){
  let newNode = new node(data)
  newNode.next= this.head
  this.head= newNode
}

 insertAtEnd(data){
  let newNode = new node(data)
  if(!this.head){
    this.head= newNode
    return
  }
  let temp = this.head
  while(temp.next){
    temp = temp.next

  }temp.next= newNode
}

//delete a node by value

deleteNode(value){
  if(!this.head)return
  if(this.head.data===value){
    this.head= this.head.next
    return
  }
  let temp = this.head
  while (temp.next && temp.next.data!==value){
    temp= temp.next;
  }
   if(temp.next){
    temp.next = temp.next.next
   }
}

printList(){
  let temp = this.head
  let result = []
  while(temp){
    result.push(temp.data)
    temp= temp.next
  }
  console.log(result.join(' -> '))
}
}

let list = new singlyLinkedList()

 list.insertAtBeginning(0)
 list.insertAtBeginning(6)
 list.fromArray([3,4,5,6,78])
 list.insertAtEnd(1)
 list.deleteNode(4)
 list.printList()
