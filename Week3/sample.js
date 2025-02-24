//   class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
//   }

//   class BST{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root == null
//     }

//     insert(value){
//         let newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,node){
//         if(root.value < node.value){
           
//             if(root.left){
//                 this.insertNode(node.left,node)
//             }else{
//                 root.left = node
//             }
//         }
//         if(root.right){
//             this.insertNode(node.right,node)
//         }else{
//             root.right= node
//         }
//     }

//     search(root , value){
//         if(root){
//             if(root.value == value){
//                 return true
//             }else if(root.value < value){
//                 this.search(root.right,value)
//             }else{
//                 this.search(root.left,value)
//             }
//         }
//         return false
//     }

//     delete(value){
//         this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(root == null) return root

//         if(root.value < value){
//             this.deleteNode(root.right , value)
//         }else if(root.value > value){
//             this.deleteNode(root.left ,value)
//         }else{
//             if(!root.right && root.left){
//                 return null
//             }else if(!root.right){
//                 return root.left
//             }else{
//                 root.value =this.min(root.right)
//                 root.right = this.deleteNode(root.right,root.value)
//             }
//         }
//     }
//   }

// class MinHeap{
//     constructor(){
//         this.heap=[]
//     }
//     parent(i){
//         return Math.floor((i-1)/2)
// }
// leftChild(i){
//     return i *2+1
// }
// rightChild(i){
//     return i*2+2
// }
// insert(value){
//     this.heap.push(value)
//     this.heapifyUp()
// }

// heapifyUp(){
//     let index = this.heap.length-1
//     while(index > 0 && this.heap[this.parent(index)] > this.heap[index]){
//         [this.heap[this.parent(index)],this.heap[index]]= [this.heap[index],this.heap[this.parent(index)]]
//         index =this.parent(index)
//     }
// }

// delete(){
//     if(this.heap.length===0)return 0
//     if(this.heap.length===1)return this.heap.pop()
//         let minval = this.heap[0]
//     this.heap[0]= this.heap.pop()
//     this.heapifydown(0)
//     return minval

// }

// heapifydown(index){
//     let smallest = index
//     let left = this.leftChild(smallest)
//     let right = this.rightChild(smallest)

//     if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
//         smallest = left
//     }
//     if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
//         smallest = right
//     }
//     if(index !=smallest){
//         [this.heap[index],this.heap[smallest]]=[this.heap[smallest],this.heap[index]]
//         this.heapifydown(smallest)
//     }
// }

// print(){
//     console.log(this.heap)
// }

// heapSort(){
//     let tempHeap = [...this.heap]
//     const arr = []
//     while(this.heap.length > 0){
//         arr.push(this.delete())
//     }
//     this.heap=tempHeap
//     return arr
// }
// }



// let heap = new MinHeap()
// heap.insert(4)
// heap.insert(1)
// heap.insert(7)
// heap.insert(8)
// heap.insert(3)
// heap.insert(2)

// heap.print()


// class MinHeap{
//     constructor(){
//         this.heap = []
//     }

//     parent(i){
//         return Math.floor((i-1)/2)
//     }

//     leftchild(i){
//         return i*2+1
//     }
//     rightchild(i){
//         return i*2+2
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyup()
//     }

//     heapifyup(){
//         let index = this.heap.length-1
//         while(index > 0 && this.heap[this.parent(index)] > this.heap[index]){
//             [this.heap[this.parent(index)],this.heap[index]]= [this.heap[index],this.heap[this.parent(index)]]
//             index = this.parent(index)
//         }
//     }

//     print(){
//         console.log(this.heap)
//     }

//     delete(){
//         if(this.heap.length ===0 )return 0
//         if(this.heap.length=== 1) return this.heap.pop()
//         let minval = this.heap[0]
//         this.heap[0]= this.heap.pop()
//         this.heapifydown(0)
//         return minval
//     }

//     heapifydown(index){
//         let smallest = index
//         let left = this.leftchild(smallest)
//         let right = this.rightchild(smallest)

//         if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
//             smallest=left
//         }
//         if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
//             smallest=right
//         }

//         if(smallest != index){
//             [this.heap[smallest],this.heap[index]]=[this.heap[index],this.heap[smallest]]
//             this.heapifydown(smallest)
//         }
//     }
//     heapsort(){
//         let tempHeap = [...this.heap]
//         let arr=[]
//         while(this.heap.length > 0){
//             arr.push(this.delete())
//         }
//         this.heap = tempHeap
//         return arr

//     }
// }

// let heap = new MinHeap()
// heap.insert(3)
// heap.insert(1)
// heap.insert(7)
// heap.insert(3)
// heap.insert(9)
// heap.delete()
// heap.delete()
// heap.print()
// console.log(heap.heapsort())


// class MaxHeap{
//     constructor(){
//         this.heap = []
//     }

//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     leftChild(i){
//         return i *2+1
//     }
//     rightchild(i){
//         return i*2+2
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyup()
//     }

//     heapifyup(){
//        let index =this.heap.length -1

//        while(index > 0 && this.heap[index] > this.heap[this.parent(index)]){
//           [this.heap[index],this.heap[this.parent(index)]]= [this.heap[this.parent(index)],this.heap[index]]
//           index = this.parent(index)
//        }
//     }
//     print(){
//         console.log(this.heap)
//     }

//     delete(){
//         if(this.heap.length === 0)return 0
//         if(this.heap.length== 1)return this.heap.pop()
//         let maxval = this.heap[0]
//         this.heap[0]= this.heap.pop()
//         this.heapifydown(0)
//         return maxval

//     }
//     heapifydown(index){
//         let largest = index

//         let left = this.leftChild(largest)
//         let righ = this.rightchild(largest)

//         if(left < this.heap.length && this.heap[largest]<this.heap[left]){
//             largest = left
//         }
//         if(righ < this.heap.length&& this.heap[largest]<this.heap[righ]){
//             largest = righ
//         }

//         if(largest!=index){
//             [this.heap[largest],this.heap[index]]= [this.heap[index],this.heap[largest]]
//             this.heapifydown(largest)
//         }
//     }
//     heapSort(){
//         let tempHeap = [...this.heap]
//         let arr = []

//         while(this.heap.length > 0){
//             arr.push(this.delete())
//         }
//         this.heap = tempHeap
//         console.log(arr)
//     }
    
// }


// let heap = new MaxHeap()
// heap.insert(4)
// heap.insert(5)
// heap.insert(3)
// heap.insert(9)
// heap.insert(8)
// heap.insert(6)
// heap.heapSort()
// heap.delete()
// heap.delete()
// heap.print()



class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right= null
    }
}
class BST {
constructor(){
    this.root = null
}

isEmpty(){
    return this.root===null
}
  insert(value){
    let newNode = new Node(value)
    if(this.isEmpty()){
        this.root = newNode
    }else{
        this.insertNode(this.root,newNode)
    }
  }
    insertNode(root,newNode){
    if(newNode.value < root.value){
        if(root.left){
      this.insertNode(root.left, newNode)
        }else{
            root.left = newNode
        }
    }else{
        if(root.right){
            this.insertNode(root.right, newNode)
        }else{
            root.right = newNode
        }
    }
    }
  preOrder(root){
if(root){
    console.log(root.value)
    this.preOrder(root.left)
    this.preOrder(root.right)
}
  }

  inOrder(root){
    if(root){
    this.inOrder(root.left)
    console.log(root.value)
    this.inOrder(root.right)
  }}

  postOrder(root){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)
    }
}

search(value,root=this.root){
  while(root){
    if(root.value === value) {
        return true
    }else if(value <root.value){
        root= root.left
    }else{
        root=root.right
    }
}
return false
}
levelOrder(){
    let queue =[this.root]
    while(queue.length){
        let curr = queue.shift()
        console.log(curr.value)
        curr.left && queue.push(curr.left) 
        curr.right && queue.push(curr.right) 
    }
}

min(){
    let root = this.root

    while(root.left){
     root = root.left
    }
    return root.value
}

max(){
    let root = this.root
    while(root.right){ 
        root = root.right
    }
    return root.value
}


delete(root , value){
    if(root== null) return null
     if(root.value > value){
      root.left=  this.delete(root.left, value)
     }else if(root.value < value){
      root.right=  this.delete(root.right , value)
     }else{
        if(!root.left&& !root.right){
            return null
        }else if(root.left){
            return root.right
        }else if (root.right){
            return root.left
        }else{
             root.value = this.min(root.right)
             root.right = this.delete(root.right, root.value)
        }
     }
     return root

}
}


let trrr = new BST()
trrr.insert(4)
trrr.insert(1)
trrr.insert(9)
trrr.insert(8)
trrr.insert(5)
trrr.delete(trrr.root,5)
trrr.postOrder(trrr.root)
trrr.levelOrder()
console.log(trrr.search(5))
console.log(trrr.max())