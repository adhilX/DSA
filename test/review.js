// class TrieNode{
//     constructor(){
//         this.chid = {}
//         this.isEnd = false
//     }
// }


// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }

//     insert(word){
//         let node = this.root

//         for (const char of word) {
//             if(!node.chid[char]){
//                 node.chid[char]= new TrieNode()
//             }
//             node = node.chid[char]
//         }
//         node.isEnd= true
//     }
//     autocomplete(prefix){
//         let node = this.root
//         for (const char of prefix) {
//             if(!node.chid[char]) return []
//             node = node.chid[char]
//         }
//          return this.findWord(node , prefix)
//     }

//     findWord(node, prefix){
       
//         let result = []
//         if(node.isEnd)result.push(prefix)

//             for (const char in node.chid) {
//               result.push(...this.findWord(node.chid[char], prefix+ char))
//             }
//             return result
//     }
// }

// let trie = new Trie()
// trie.insert('adh')
// trie.insert('adhi')
// trie.insert('adhil')
// console.log(trie.autocomplete('ad'))


class TreeNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }

    insert(value){

        let node = new TreeNode(value)
        if(this.root== null){
            return this.root = node
        }
       return this.insertNode(this.root , node)
    }

    insertNode(root, node){
  while(root){
        if(root.value > node.value){
            if(root.left){
                root= root.left
            }else{
                return root.left = node
            }
        }else{
            if(root.right){
                root= root.right
            }else{
          return  root.right = node
            }
        }
    }
    }

    BFSINorder(root= this.root,arr=[]){
        
           if(root){
            this.BFSINorder(root.left,arr)
            arr.push(root.value)
            this.BFSINorder(root.right, arr)
           }
           return arr[arr.length-2]
    }
}

let bst = new BST()
bst.insert(3)
bst.insert(1)
bst.insert(2)
bst.insert(6)
bst.insert(12)
bst.insert(14)
bst.insert(16)
console.log(bst.BFSINorder())
