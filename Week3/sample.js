//   class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
//   }

const nodemon = require("nodemon")

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



// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right= null
//     }
// }
// class BST {
// constructor(){
//     this.root = null
// }

// isEmpty(){
//     return this.root===null
// }
//   insert(value){
//     let newNode = new Node(value)
//     if(this.isEmpty()){
//         this.root = newNode
//     }else{
//         this.insertNode(this.root,newNode)
//     }
//   }
//     insertNode(root,newNode){
//     if(newNode.value < root.value){
//         if(root.left){
//       this.insertNode(root.left, newNode)
//         }else{
//             root.left = newNode
//         }
//     }else{
//         if(root.right){
//             this.insertNode(root.right, newNode)
//         }else{
//             root.right = newNode
//         }
//     }
//     }
//   preOrder(root){
// if(root){
//     console.log(root.value)
//     this.preOrder(root.left)
//     this.preOrder(root.right)
// }
//   }

//   inOrder(root){
//     if(root){
//     this.inOrder(root.left)
//     console.log(root.value)
//     this.inOrder(root.right)
//   }}

//   postOrder(root){
//     if(root){
//         this.postOrder(root.left)
//         this.postOrder(root.right)
//         console.log(root.value)
//     }
// }

// search(value,root=this.root){
//   while(root){
//     if(root.value === value) {
//         return true
//     }else if(value <root.value){
//         root= root.left
//     }else{
//         root=root.right
//     }
// }
// return false
// }
// levelOrder(){
//     let queue =[this.root]
//     while(queue.length){
//         let curr = queue.shift()
//         console.log(curr.value)
//         curr.left && queue.push(curr.left) 
//         curr.right && queue.push(curr.right) 
//     }
// }

// min(){
//     let root = this.root

//     while(root.left){
//      root = root.left
//     }
//     return root.value
// }

// max(){
//     let root = this.root
//     while(root.right){ 
//         root = root.right
//     }
//     return root.value
// }


// delete(root , value){
//     if(root== null) return null
//      if(root.value > value){
//       root.left=  this.delete(root.left, value)
//      }else if(root.value < value){
//       root.right=  this.delete(root.right , value)
//      }else{
//         if(!root.left&& !root.right){
//             return null
//         }else if(root.left){
//             return root.right
//         }else if (root.right){
//             return root.left
//         }else{
//              root.value = this.min(root.right)
//              root.right = this.delete(root.right, root.value)
//         }
//      }
//      return root

// }
// }


// let trrr = new BST()
// trrr.insert(4)
// trrr.insert(1)
// trrr.insert(9)
// trrr.insert(8)
// trrr.insert(5)
// trrr.delete(trrr.root,5)
// trrr.postOrder(trrr.root)
// trrr.levelOrder()
// console.log(trrr.search(5))
// console.log(trrr.max())

//===========================================================

// class TrieNode {
//     constructor() {
//         this.childNode = {}
//         this.isEnd = false
//     }
// }

// class Trie {
//     constructor(){
//    this.root = new TrieNode()
//     }

//     insert(word){
//       let node = this.root  
//         for(let char of word){
//             if(!node.childNode[char]){
//                 node.childNode[char]= new TrieNode()
//             }
//             node = node.childNode[char]
//         }
//         node.isEnd = true
//     }

//     search(word){
//         let node = this.traverse(word)
//         return node ? node.isEnd : false
        
//     }
//     traverse(word){
//         let node = this.root
//         for(let char of word ) {
//             if(!node.childNode[char]){
//                 return null
//             }
//             node= node.childNode[char]
//         }
//         return node
//     }

//     autocomplete(word){
//    let node = this.root
//       for(let char of word){
//         if(!node.childNode[char]){
//             return []
//         }
//         node = node.childNode[char]
//       }
//       return this.findWords(node ,word )
//     }

//     findWords(node  , word){
//         let result = []
//         if(node.isEnd){
//         result.push(word)
//         }
//         for(let char in node.childNode){
//             result.push(...this.findWords(node.childNode[char],word+char))
//         }
//         return result
//     }

    
// }


// // ✅ Test Cases
// let trie = new Trie();
// trie.insert("cat");
// trie.insert("car");
// trie.insert("cart");
// trie.insert("care");
// trie.insert("dog");
// trie.insert("doll");

// console.log(trie.autocomplete("ca")); // ["cat", "car", "cart", "care"]
// console.log(trie.autocomplete("do")); // ["dog", "doll"]
// console.log(trie.autocomplete("z"));  // [] (No words found)
// console.log(trie.search("cat"));  // true
// console.log(trie.search("carts")); // false

// class TreeNode {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BST {
//     constructor(){
//         this.root = null
//     }

// isEmpty(){
//     return this.root == null
// }
//     insert(value){
//     let node = new TreeNode(value)

//     if(this.isEmpty()){
//       this.root = node
//     }else{
//         this.insertNode(this.root, node)
//     }
//     }
//    insertNode(root, node){
     
//     if(root.value < node.value){
//     if(root.right){
//         this.insertNode(root.right, node)
//     }else{
//         root.right= node
//     }
//     }else{
//         if(root.left){
//             this.insertNode(root.left, node)
//         }else{
//         root.left = node
//     }
// }
//    }

//    dfsPreorder(node = this.root){
//     if(node){
//         console.log(node.value)
//         this.dfsPreorder(node.left)
//         this.dfsPreorder(node.right)
//     }
//    }

//    dfsInorder(node = this.root){
//     if(node){
//         this.dfsInorder(node.left)
//         console.log(node.value)
//         this.dfsInorder(node.right)
//     }
//    }
//    dfsPostOrder(node = this.root){
//     if(node){
//         this.dfsPostOrder(node.left)
//         this.dfsPostOrder(node.right)
//         console.log(node.value)
//     }
//    }

//    search(value,node = this.root){
//     while(node){
//     if(node.value == value)return true

//     if(node.value < value){
//        node = node.right
//     }else{
//         node = node.left
//     }
//    }
//    return false
// }

// min(root){
//     if(root.left){
//       return  this.min(root.left)
//     }else{
//         return root.value
//     }

// }

// delete(value){
//     this.root= this.deleteNode(this.root,value)
// }
// deleteNode(root,value){
//     if(root== null)return root
//       if(root.value > value){
//         root.left = this.deleteNode(root.left,value)
//       }else if(root.value < value){
//         root.right = this.deleteNode(root.right,value)
//       }else{
//         if(!root.right && !root.left){
//             return null
//         }else if(!root.right){
//             return root.left
//         }else if(!root.left){
//             return root.right
//         }else{
//             root.value = this.min(root.right)
//             root.right= this.deleteNode(root.right,root.value)
//         }
//       } 
//       return root
// }
// levelOrder(){
//     if(!this.root)return 
//     const queue =[this.root]
//     while(queue.length){
//         let curr = queue.shift()
//         console.log(curr.value)
//         curr.left && queue.push(curr.left)
//         curr.right && queue.push(curr.right)
//     }
// }
// }

// let tree = new BST()

// tree.insert(5)
// tree.insert(8)
// tree.insert(2)
// tree.insert(4)
// tree.insert(1)
// tree.insert(7)
// tree.insert(3)
// tree.dfsPreorder()
// tree.delete(5)
// console.log('++++++++++++++++++++++++++++')
// tree.dfsInorder()
// console.log('++++++++++++++++++++++++++++')
// tree.levelOrder()
// console.log(tree.search(15))


// class MinHeap {
//     constructor() {
//         this.heap = []
//     }

//     parent(i){
//         return Math.floor((i-1)/2)
//     }

//     leftChild(i){
//         return i*2+1
//     }
//     rightChild(i){
//         return i*2+2
//     }
//     insert(value){
//         this.heap.push(value)
//         this.heapfyup()
//     }
//     heapfyup(){
//         let index = this.heap.length-1
//         while(index > 0 && this.heap[index]< this.heap[this.parent(index)]){
//             [this.heap[index],this.heap[this.parent(index)]]=[this.heap[this.parent(index)],this.heap[index]]
//             index= this.parent(index)
//         }
//     }
//     print(){
//         return this.heap.join(' ')
//     }

//     delete(){
//         if(this.heap.length==0)return 
//         if(this.heap.length==1)return this.heap.pop()

//             let min =this.heap[0]
//             this.heap[0]= this.heap.pop()
//             this.heapfyDown(0)
//             return min
//     }

//     heapfyDown(index){
//         let smallest= index
//         let left=this.leftChild(smallest)
//         let right = this.rightChild(smallest)
//         if(this.heap[left] < this.heap[smallest]){
//             smallest = left
//         }
//         if(this.heap[right]<this.heap[smallest] ){
//             smallest= right
//         }
//         if(smallest!= index){
//             [this.heap[smallest],this.heap[index]]=[this.heap[index],this.heap[smallest]]
//         this.heapfyDown(smallest)
//         }
//     }
//     heapSort(){
//         let tempHeap= this.heap
//          let result = []
//          while(this.heap.length){
//             result.push(this.delete())
//          }
//          this.heap = tempHeap
//          return result
//     }
// }

// let heap = new MinHeap()
// heap.insert(69)
// heap.insert(3)
// heap.insert(8)
// heap.insert(36)
// heap.insert(33)
// heap.insert(23)
// heap.insert(7)
// heap.delete()
// console.log(heap.print())
// console.log(heap.heapSort())


// class Graph {
//     constructor(){
//         this.graph = {}
//     }
//     addVertex(vertex){
//         if(!this.graph[vertex]){
//             this.graph[vertex]=[]
//         }
//     }
//     addEdge(vertex1,vertex2){
//         !this.graph[vertex1] && this.addVertex(vertex1)
//         !this.graph[vertex2] && this.addVertex(vertex2)

//         this.graph[vertex1].push(vertex2)
//         this.graph[vertex2].push(vertex1)
//     }
//   print(){
//     for(let key in this.graph){

//         console.log(key ,'=>', this.graph[key])
//     }
//   }
// removeEdge(vertex1, vertex2){

//     if(this.graph[vertex1]){
//        this.graph[vertex1]= this.graph[vertex1].filter(v=> v!=vertex2)
//     } 

//     if(this.graph[vertex2]){
//        this.graph[vertex2]= this.graph[vertex2].filter(v=> v!=vertex1)
//     } 

// }
// removeVertex(vertex){
//     if(!this.graph[vertex])return
//       for(let val in this.graph){
//         this.graph[val] = this.graph[val].filter(v=> v!= vertex)
//       }
//         delete this.graph[vertex]
    
// }
// dfs(start){
//     if(!this.graph[start])return console.log('invalide starting')

//         let visited = new Set()
//         let stack = [start]

//         while(stack.length){
//             let vertex = stack.pop()
//             if(!visited.has(vertex)){
//                 console.log(vertex)
//                 visited.add(vertex)
//             }
//             stack.push(...this.graph[vertex].filter(v=> !visited.has(v)))
//         }
// }
// bfs(start){
//     if(!this.graph[start])return console.log('invalide starting')
//       let visited = new Set()
//     let queue = [start]
//       while(queue.length){
//         let vertex = queue.shift()
//         if(!visited.has(vertex)){
//             console.log(vertex)
//             visited.add(vertex)
//         }
//         queue.push(...this.graph[vertex].filter(v=> !visited.has(v)))
//       }
//     }
// }

// let graph= new Graph()
// graph.addEdge('g','k')
// graph.addEdge('h','b')
// graph.addEdge('g','s')
// // graph.removeVertex('k')
// // graph.removeEdge('g','s')
// graph.bfs('g')
// console.log('========================')
// graph.print()


//=================================================================
// class TrieNode {
//     constructor(){
//         this.children={}
//         this.isEnd = false
//     }
// }

// class Trie {
//     constructor(){
//         this.root = new TrieNode()
//     }

// insert(word){
//     let node = this.root
//     for (const char of word) {
//         if(!node.children[char]){
//             node.children[char]= new TrieNode()
//         }
//         node = node.children[char]
//     }
//     node.isEnd= true
// }

// traversal(str){
//     let node = this.root

//     for (const char of str) {
//         if(!node.children[char])return null
//         node=node.children[char]
//     }
//     return node
// }

// search(word){

//     let node = this.traversal(word)
//     return node?node.isEnd : false
// }

// autocomplete(str){
//     let node = this.root
//        for(let char of str){
//         if(!node.children[char])return []
//         node=node.children[char]
//        }
//        return this.findWords(node , str)
// }
// findWords(node , prefix){
//     let words = []

//     if(node.isEnd) words.push(prefix)
//     for (const char in node.children) {
//       words.push(...this.findWords(node.children[char],prefix+ char))
//     }
//     return words
// }
// }

// let hh = new Trie()
// hh.insert('adh')
// hh.insert('adhi')
// hh.insert('adhil')

// console.log(hh.search('adhm'))
// console.log(hh.autocomplete('adh'))

// class TreeNode {
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }


// class BST {
//     constructor(){
//         this.root = null
//     }
//     insert(value){
//         let node = new TreeNode(value)
//        if(this.root == null){
//         this.root = node
//        }else{
//    this.insestNode (this.root , node)
//        }
//     }

//     insestNode(root, node){
        
//         if(root.value < node.value){
//             if(root.right){
//                 this.insestNode(root.right , node)
//             }else{
//                 root.right = node
//             }
//         }else{
//             if(root.left){
//                 this.insestNode(root.left , node)
//             }else{
//                 root.left = node
//             }
//         }
//     }

//     isEmpty (){
//         return this.root == null
//     }

//     serarch (node,value){
        
//         if(this.isEmpty()){
//             return false
//         }
//         while(node){
//             if(node.value== value)return true
//             else if(node.value < value){
//                 node = node.right
//         }else{
//             node= node.left
//         }
//     }
//     return false
//     }

//   DfsInOrder(node = this.root){
//     if(node){
//         this.DfsInOrder(node.left)
//         console.log(node.value)
//         this.DfsInOrder(node.right)
//     }
//   }

// hight(node = this.root){
//     if(node==null)return 0
//     return Math.max(this.hight(node.left), this.hight(node.right))+1
// }

// veifyBST(node = this.root , min= -Infinity , max = Infinity){

//     if(node==null)return true
//     if(node.value <= min || node.value >= max)return false

//     return this.veifyBST(node.right ,node.value, max ) && this.veifyBST(node.left , min , node.value)


// }
//   min(node){
//     while(node.left){
//         node = node.left
//     }
//     return node.value
//   }
//  delete(value){
//     this.root = this.deleteNode(this.root, value)
//  }

//  deleteNode(root , value){
//     if(root=== null)return null

//     if(root.value < value){
//      root.right=   this.deleteNode(root.right , value)
//     }else if(root.value > value){
//        root.left= this.deleteNode(root.left , value)
//     }else{
//         if(!root.left && !root.right){
//             return null
//         }else if(!root.left){
//             return root.right
//         }else if(!root.right){
//             return root.left
//         }else{
//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right , root.value)
//         }
//     }
//     return root
//  }
// }

// let tree = new BST()
// tree.insert(4)
// tree.insert(3)
// tree.insert(7)
// tree.insert(2)
// tree.insert(9)
// tree.insert(1)
// console.log(tree.serarch(tree.root ,52))
// tree.delete(1)
// tree.DfsInOrder()
// console.log('============================')
// console.log(tree.hight())
// console.log(tree.veifyBST())
// console.log(tree.min(tree.root))

// class MinHeap{
//     constructor(){
//         this.heap = []
//     }

//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     leftChild(i){
//         return i*2+1
//     }
//     rightChild(i){
//         return i*2+2
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapfyUp()
//     }
//     heapfyUp(){
//         let index =this.heap.length-1

//         while(index > 0 && this.heap[index] < this.heap[this.parent(index)]){
//             [this.heap[index],this.heap[this.parent(index)]] = [this.heap[this.parent(index)],this.heap[index]]
//             index = this.parent(index)
//         }
//     }

//     delete(){
//         if(this.heap.length==0)return 
//         if(this.heap.length== 1)return this.heap.pop()
//                let min = this.heap[0]
//             this.heap[0]= this.heap.pop()

//             this.heapfyDown(0)
//         return min
//     }
//     heapfyDown(index){
//         let parent = index
//         let left = this.leftChild(parent)
//         let right = this.rightChild(parent)

//         if(this.heap[parent] > this.heap[left]){
//             parent = left
//         }
//         if(this.heap[parent] > this.heap[right]){
//             parent = right
//         }
//         if(parent != index){
//             [this.heap[parent],this.heap[index]]= [this.heap[index],this.heap[parent]]
//         this.heapfyDown(parent)
//         }
//     }
//     print(){
//         console.log(this.heap.join(' '))
//     }
// }


// let heap  = new MinHeap()
// heap.insert(3 )
// heap.insert(2 )
// heap.insert(1 )
// heap.insert(8 )
// heap.insert(6 )
// heap.delete(3)
// heap.print()


// class TreeNode{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BST {
//     constructor() {
//         this.root = null
//     }

//     insert(value){
//         let node = new TreeNode(value)
//         if(this.root==null){
//             this.root = node
//         }else{
//             this.insertNode(this.root , node)
//         }
//     }
//     insertNode(root , node){
//             if(root.value > node.value){
//                 if(root.left){
//                     this.insertNode(root.left, node)
//                 }else{
//                     root.left = node
//                 }
//             }else{
//                 if(root.right){
//                 this.insertNode(root.right , node)
//                 }else{
//                     root.right = node
//                 }
//             }

        
//     }
//     dfsInOrder(node = this.root){
//         if(node){
//             this.dfsInOrder(node.left)
//             console.log(node.value)
//             this.dfsInOrder(node.right)
//         }
//     }
//     min(root){
//         if(root.left){
//             return this.min(root.left)
//         }
//         return root.value
//     }

//     delete(value){
//         this.root= this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value){
//         if(root === null)return null
//         if(root.value < value){
//            root.right= this.deleteNode(root.right, value)
//         }else if(root.value> value){
//           root.left=  this.deleteNode(root.left , value)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }else if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }else{
//                 root.value = this.min(root.right)
//                root.right= this.deleteNode(root.right , root.value)
//             }
//         }
//         return root
//     }
//     search(value, root = this.root){
//         while(root){
//             if(root.value == value)return true
//             if(root.value < value){
//                 root= root.right
//         }else{
//             root= root.left
//         }
//         }
//         return false

//         }
     
//         varifyBST(root = this.root , min = -Infinity , max = Infinity){
//       if(root==null)return true
//             if(root.value <= min || root.value >= max){
//                 return false
//             }

//             return this.varifyBST(root.right , root.value , max) && this.varifyBST(root.left , min , root.value)
//         }

//         levelOrder(){
//            if(!this.root)return
//            let queue = [ this.root]
//            while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.value)
//             curr.left && queue.push(curr.left)
//             curr.right && queue.push(curr.right)
//            }
//         }

//         hight(root = this.root){
//             if(root==null)return 0

//             return Math.max(this.hight(root.left), this.hight(root.right)) + 1 
//         }
// }

// let tree = new BST()
// tree.insert(4)
// tree.insert(3)
// tree.insert(8)
// tree.insert(0)
// tree.insert(2)
// tree.delete(2)
// console.log(tree.search(7))
// tree.levelOrder()
// console.log(tree.varifyBST())
// console.log(tree.hight())

// class Graph {
//     constructor() {
//         this.graph = {}
//     }

//     addVertex(vertex){
//         if(!this.graph[vertex]){
//             this.graph[vertex]=[]
//         }
//     }

//     addEdge(vertex1 , vertex2){
//         if(!this.graph[vertex1])this.addVertex(vertex1)
//         if(!this.graph[vertex2])this.addVertex(vertex2)

//             this.graph[vertex1].push(vertex2)
//             this.graph[vertex2].push(vertex1)
//     }
//     print(){
//         console.log(this.graph)
//     }

//     removeVertex(vertex){
//         if(this.graph[vertex]){
//             delete this.graph[vertex]
//         }
//         for(let key in this.graph){
//             this.graph[key]= this.graph[key].filter(v=>v!= vertex)
//         }
//     }
//     removeEdge(vertex1,vertex2){
//        if(this.graph[vertex1] ){
//           this.graph[vertex1] =  this.graph[vertex1].filter(v=> v!= vertex2)
//        }
//        if(this.graph[vertex2] ){
//            this.graph[vertex2]=this.graph[vertex2].filter(v=> v!= vertex1)
//        }
// }

// bfs(start){
//     if(!this.graph[start])return 

//     let visited = new Set()
//     let queue = [start]

//     while(queue.length){
//         let curr = queue.shift()
//         if(!visited.has(curr)){
//             console.log(curr)
//             visited.add(curr)
//         }
//         queue.push(...this.graph[curr].filter(v => !visited.has(v)))
//     }
// }

// dfs(start){
//     if(!this.graph[start])return 

//     let stack =[start]
//     let visited = new Set()
//     while(stack.length){
//         let curr= stack.pop()

//         if(!visited.has(curr)){
//             visited.add(curr)
//             console.log(curr)
//         }
//         stack.push(...this.graph[curr].filter(v=> !visited.has(v)))
//     }
// }
// }

// let graph = new Graph()
// graph.addEdge('d', 'r')
// graph.addEdge('r','g')
// // graph.removeEdge('r','g')
// // graph.print()
// graph.bfs('r')
// graph.dfs('r')

// class MinHeap {
//     constructor() {
//         this.heap = []
//     }

//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     leftChild(i){
//         return i*2+1
//     }
//     rightChild(i){
//         return i*2+2
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapfyUp()
//     }
//     swap(index1,index2){
//        return [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
//     }

//     heapfyUp(){
//         let index = this.heap.length-1
//      while(index > 0 &&this.heap[index]<this.heap[this.parent(index)]){
//          this.swap(index,this.parent(index))
//          index=this.parent(index)
//      }

//     }
// print(){
//     console.log(this.heap)
// }

// delete(){
//     if(this.heap.length==0)return null

//     if(this.heap.length==1) return this.heap.pop()
//         let minval = this.heap[0]
//         this.heap[0]= this.heap.pop()

//         this.heapfyDown(0)
//         return minval
// }

// heapfyDown(index){
//    let  smallest = index

//    let left = this.leftChild(smallest)
//    let right = this.rightChild(smallest)

//    if(this.heap[smallest]> this.heap[left]){
//     smallest =left
//    }

//    if(this.heap[smallest] > this.heap[right]){
//     smallest= right
//    }

//    if(smallest!= index){
//     this.swap(smallest,index)
//     this.heapfyDown(smallest)
//    }
// }

// heapSort(){
//     let tempHeap = [...this.heap]
//     let arr = []

//     while(this.heap.length ){
//         arr.push(this.delete())
//     }
//     this.heap = tempHeap
//     console.log(arr)
// }

// }

// let heap = new MinHeap()
// heap.insert(4)
// heap.insert(3)
// heap.insert(8)
// heap.insert(1)
// heap.insert(9)
// // heap.delete()
// // heap.delete()
// heap.print()
// heap.heapSort()


// class TrieNode{
//   constructor(){
//     this.child = {}
//     this.isEnd = false
//   }
// }
// class Trie {
//     constructor(){
//         this.trie = new TrieNode()
//     }

//     insert(word){
//         let node = this.trie
//         for (const chr of word) {
//             if(!node.child[chr]){
//                 node.child[chr]= new TrieNode()
//             }
//             node=node.child[chr]
//         }
//         node.isEnd=true
//     }

//     search(word){
//         let node =this.trie
//         for(let chr of word){
//             if(!node.child[chr])return false
//             node=node.child[chr]
//         }
//         return node? node.isEnd: false
//     }
//     autocomplete(prefix){
//         let node = this.trie
//         for(let chr of prefix){
//             if(!node.child[chr])return []
//             node=node.child[chr]
//         }
//         return this.findword(prefix,node)
//     }
//     findword(prefix,node){
//         let word = []
//         if(node.isEnd) word.push(prefix)
//             for (const key in node.child) {
//                      word.push(...this.findword(prefix+key,node.child[key] ))
//                 }
//                 return word
//             }
//     }


// let trie=  new Trie()
// trie.insert('he')
// trie.insert('hell')
// trie.insert('hello')
// console.log(trie.autocomplete('he'))


// class TreeNode {
//     constructor(value) {
//   this.value =value
//   this.left = null
//   this.right = null
//     }
// }

// class BST {
//     constructor() {
//         this.root = null
//     }
//     insert(value) {
//         let node = new TreeNode(value)
//         if(!this.root){
//             this.root = node
//         }else{
//             return this.insertNode(this.root, node)
//         }
//     }

//     insertNode(root , node){
//         if(root.value >node.value ){
//             if(root.left){
//                 this.insertNode(root.left, node)
//             }else{
//                 root.left = node
//             }

//         }else{
//             if(root.right){
//                 this.insertNode(root.right , node)
//             }else{
//                 root.right = node
//             }
//         }
//     }
//     DfsInorder(root=this.root){
//        if(root){
//         this.DfsInorder(root.left)
//         console.log(root.value)
//         this.DfsInorder(root.right)
//        }
//     }

//     search(value , root = this.root) {
//          while(root){
//              if(root.value=== value )return true
//             else if(root.value > value){
//                  root= root.left
                  
//              }else if(root.value < value){
//                    root = root.right
//                  }

//                 }
//                 return false
//          }

// min(root){
// while(root.left){
//     root=root.left
// }
// return root.value
// }

//          delete(value){
//             this.root = this.deleteNode(value , this.root)
//          }

//          deleteNode(value , root){
//             if(root.value > value) {
//              root.left =    this.deleteNode(value , root.left)
//             }else if(root.value < value){
//               root.right =  this.deleteNode(value , root.right)
//             }else{
//                 if(!root.left && !root.right) {
//                     return null
//                 }else if(!root.left){
//                     return root.right
//                 }else if (!root.right){
//                     return root.left
//                 }else{
//                     root.value = this.min(root.right)
//                     root.right= this.deleteNode(root.value,root.right)
//                 }
//             }
//             return root
//          }      

//          isValide(node = this.root, min= -Infinity , max = Infinity){
//             if(node== null) return true

//             if( node.value <= min || node.value >= max ){
//                 return false
//             }

//             return this.isValide(node.left , min , node.value) && this.isValide(node.right , node.value , max)
//          }

//          hight (root = this.root){
//         if(root == null) return 0

//         return Math.max(this.hight(root.left),this.hight(root.right)) + 1
//      }

//      leavelOrder(root = this.root){
//         if(!root)return
//         let queue = [root]

//         while(queue.length){
//             let cur = queue.shift()
//             console.log(cur.value)
//             cur.left && queue.push(cur.left)
//             cur.right && queue.push(cur.right)
//         }

//      }
// }
// let bst = new BST()

// bst.insert(3)
// bst.insert(1)
// bst.insert(7)
// // bst.delete(1)
// console.log(bst.search(1))
// console.log(bst.hight())
// console.log(bst.isValide())
// // bst.DfsInorder()
// bst.leavelOrder()


// class MinHeap {
//     constructor(){
//         this.Heap = []
//     }


//     parent(i){
//         return Math.floor((i-1)/2)
//     }

//     leftchild(i){
//         return i*2 +1
//     }
//     rightChild(i){
//         return i*2+2
//     }
//     swap(index1,index2) {
//         return [this.Heap[index1],this.Heap[index2]] = [this.Heap[index2],this.Heap[index1]]
//     }
//     insert( value){
//         this.Heap.push(value)
//         this.HeapfyUp()
//     }
//     HeapfyUp(){
//         let index = this.Heap.length-1

//         while(index > 0 && this.Heap[index] < this.Heap[this.parent(index)]){
//                     this.swap(index , this.parent(index))
//                     index = this.parent(index)
//         }
//     }

//     delete(){
//         if(this.Heap.length == 0)return
//         if(this.Heap.length == 1)return this.Heap.pop()
//         let minVal = this.Heap[0]
//         this.Heap[0] = this.Heap.pop()
//         this.HeapfyDown(0)
//         return minVal
//     }

//     HeapfyDown(index){
//         let smallest = index
         
//         let left = this.leftchild(index)
//         let right = this.rightChild(index)
//         if(this.Heap[smallest] > this.Heap[left] ){
//             smallest = left
//         }
//         if(this.Heap[smallest] > this.Heap[right] ){
//             smallest = right
//         }

//         if(smallest != index){
//             this.swap(smallest , index)
//             this.HeapfyDown(smallest

//             )
//         }
//     }
//     print(){
//         console.log(this.Heap)
//     }

//     heapSort(){
//         let tempHeap = [...this.Heap]
//         let result = []
//         while(this.Heap.length){
//             result.push(this.delete())
//         }
//         this.Heap = tempHeap
//         console.log(result)
//     }
// }

// let heap = new MinHeap()
// heap.insert(4)
// heap.insert(3)
// heap.insert(8)
// heap.insert(6)
// heap.insert(9)
// // heap.delete()
// heap.print()
// heap.heapSort()


// class Graph {
//     constructor(){
//         this.child = {}
//         this.isEnd = false
//     }

//     addVertex(vertex){
        
//         if(!this.child[vertex]){
//             this.child[vertex] = []
//         }

//     }

//     addEdge(vertex1,vertex2){
        
//         !this.child[vertex1] && this.addVertex(vertex1)
//         !this.child[vertex2] && this.addVertex(vertex2)

//     this.child[vertex1].push(vertex2)
//     this.child[vertex2].push(vertex1)
//     }

//     DFS(start){
//         if(!this.child[start]) return 

//         let queue = [start]
//         let visited = new Set()
       
//         while(queue.length){
//             let val = queue.shift()
//             if(!visited.has(val)){
//                 console.log(val)
//                 visited.add(val)
//             }
//             queue.push(...this.child[val].filter(v=> !visited.has(v)))
//         }

//     }
//     print(){
//         console.log(this.child)
//     }
// }

// let graph = new Graph()
// graph.addVertex('g')
// graph.addVertex('t')
// graph.addEdge('f','b')
// // graph.DFS('g')
// graph.print()



// class TrieNode {
//     constructor () {
//         this.child = {}
//         this.isEnd = false
//     }
// }
// class Trie {
//     constructor ()  {
//        this.root = new TrieNode()
//     }

//     insert(word){
//         let node = this.root
//         for( let char of word){
//             if(!node.child[char]){
//                 node.child[char] = new TrieNode()
//             }
//             node = node.child[char]
//         }
//          node.isEnd = true
//     }

//     autocomplete(prefix){
//         let node = this.root
//         for(let char of prefix){
//             if(!node.child[char]) return []
//             node = node.child[char]
//         }
//         return this.findWord(node,prefix)
//     }

//     findWord(node,prefix){
//        let words = []
//        if(node.isEnd)words.push(prefix)
//         for (const chr in node.child) {
//           words.push(...this.findWord(node.child[chr],prefix+chr))
//         } 
//         return words
//     }
// }

// let trie = new Trie()
// trie.insert('ad')
// trie.insert('adh')
// trie.insert('adhil')

// console.log(trie.autocomplete('ad'))

// class TreeNode {
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }
// class BST {
//     constructor(){
//     this.root = null
//     }

//     isEmpty(){
//         return this.root== null
//     }
//     insert (value){
//          let node = new TreeNode(value)

//          if(this.isEmpty()){
//          this.root  = node
//          }else{
//             this.insertNode(this.root,node)
//          }
//     }

//     insertNode(root,node) {
//         if(root.value < node.value){
//             if(root.right){
//                 this.insertNode(root.right , node)
//             }else{   
//                 root.right  =node
//             }
//         }else{
//             if(root.left){
//                 this.insertNode(root.left, node)
//             }else{
//                 root.left = node
//             }
//         }
//     }

//     DFSPreOrder(root){
//         if(root){
//             console.log(root.value)
//             this.DFSPreOrder(root.left)
//             this.DFSPreOrder(root.right)
//         }
//     }

//     search(value){
//         let node = this.root
        
//         while(node){
//             if(node.value == value)return true
//             if(value > node.value){
//                 node = node.right
//             }else{
//                 node = node.left
//             }
//         }
//         return false
//     }
//     levelorder(){
//       let queue = [this.root]
       
//       while(queue.length){
//          let curr  = queue.shift()
//          console.log(curr.value)
//           curr.left && queue.push(curr.left)
//           curr.right && queue.push(curr.right)
//       }
//     }
//     min(root){
//         if(root.left){
//           return  this.min(root.left)
//         }
//         return root.value
//     }
//     delete(value){
//         this.root = this.deleteNode(this.root , value)
//     }

//     deleteNode(root, value){
//         if(root.value < value){
//             root.right = this.deleteNode(root.right, value)
//         }else if(root.value > value){
//             root.left = this.deleteNode(root.left, value)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }else if(!root.right){
//                 return root.left
//             }else if(!right.left){
//                 return root.right
//             }else{
//                 root.value = this.min(root.right)
//                 root.right = this.deleteNode(root.right , root.value)
//             }
//         }
//         return root
//     }
// }

// let bst = new BST()

// bst.insert(1)
// bst.insert(6)
// bst.insert(8)
// bst.insert(2)
// bst.delete(8)
// console.log(bst.search(82))
// bst.levelorder(bst.root)

// class TrieNode {
//     constructor(){
//         this.child = {}
//         this.isEnd = false
//     }
// }

// class Trie {
//     constructor () {
//         this.root = new TrieNode()
//     }

//     insert(word){
//         let node = this.root
//         for (const char of word) {
//             if(!node.child[char]){
//                 node.child[char]= new TrieNode()
//             }
//             node = node.child[char]
//         }
//         node.isEnd= true
//     }


//     serach(word){
//         let node =  this.root
//         for (const char of word) {
//             if(!node.child[char]){
//                 return false
//             }
//             node = node.child[char]
//         }
//         return node? node.isEnd : false
//     }

//     autocomplete(prifix){
//         let node = this.root
//         for (const char of prifix) {
//             if(!node.child[char])return []
//             node= node.child[char]
//         }
//        return  this.findWord(node , prifix)
//     }

//     findWord(node, prifix){
//         let result = []
//         if(node.isEnd)result.push(prifix)

//             for (const key in node.child) {
//                 result.push(...this.findWord(node.child[key],prifix+ key))
//                 }
//                 return result
//             }
//     }

// let trie = new Trie()
// trie.insert('adhi')
// trie.insert('adhil')
// console.log(trie.serach('adhi'))
// console.log(trie.autocomplete('ad'))


// class Graph {
//     constructor() {
//         this.graph = {}
//     }

//     addVertex(vertex){
//         if(!this.graph[vertex]){
//             this.graph[vertex] = []
//         }
//     }
//     addEdge(vertex1,vertex2){
//         !this.graph[vertex1] && this.addVertex(vertex1)
//         !this.graph[vertex2] && this.addVertex(vertex2)

//         this.graph[vertex1].push(vertex2)
//         this.graph[vertex2].push(vertex1)
//     }

//     print(){
//         console.log(this.graph)
//     }

//     DFS(start){
//         let stack = [start]
//         let visited = new Set()
//   while(stack.length){
//         let cur = stack.pop()

//         if(!visited.has(cur)){
//             visited.add(cur)
//             console.log(cur)
//             stack.push(...this.graph[cur].filter(v=> !visited.has(v)))
//         }
//   }

//     }
// }

// let graph = new Graph()
// graph.addVertex('g')
// graph.addVertex('w')
// graph.addEdge('g','e')
// graph.addEdge('w','g')
// graph.DFS('w')