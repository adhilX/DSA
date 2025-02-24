class TreeNode {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root == null
    }

    insert(value){
        let node = new TreeNode(value)
        if(this.isEmpty()){
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node){
        if(node.value < root.value){
            if(root.left){
                this.insertNode(root.left, node)
            } else {
                root.left = node
            }
        } else {
            if(root.right){
                this.insertNode(root.right, node)
            } else {
                root.right = node
            }
        }
    }

    search(root, value){
        while(root){
            if(root.value == value) return true
            else if(root.value < value){
                root = root.right
            } else {
                root = root.left
            }
        }
        return false
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
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(){
        if(!this.root) return 
        const queue = [this.root]
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            curr.left && queue.push(curr.left)
            curr.right && queue.push(curr.right)
        }
    }

    min(root){
        if(!root.left){
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value){
        if(root == null){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left, value)
        } else if(value > root.value){
            root.right = this.deleteNode(root.right, value) 
        } else {
            if (!root.left && !root.right) {
                return null
            } else if (!root.right) {
                return root.left
            } else {
                root.value = this.min(root.right)
                root.right = this.deleteNode(root.right, root.value)
            }
        }
        return root
    }
    getHeight(root = this.root) {
        if (root === null) return 0;
        return Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
    }
}

let tree = new BST()
console.log(tree.isEmpty())
tree.insert(10);
tree.insert(5);
tree.insert(15)
tree.insert(4)
tree.insert(7);
tree.insert(9);
tree.insert(1);
tree.postOrder(tree.root)
console.log(tree.search(tree.root, 7))
tree.levelOrder()
// tree.printValues()
console.log('================')
console.log(tree.getHeight())