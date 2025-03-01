class MaxHeap{
    constructor(){
        this.heap = []
    }

    parent(i){
        return Math.floor((i-1)/2)
    }
    leftChild(i){
        return i *2+1
    }   
    rightchild(i){
        return i*2+2
    }

    insert(value){
        this.heap.push(value)
        this.heapifyup()
    }

    heapifyup(){
       let index =this.heap.length -1

       while(index > 0 && this.heap[index] > this.heap[this.parent(index)]){
          [this.heap[index],this.heap[this.parent(index)]]= [this.heap[this.parent(index)],this.heap[index]]
          index = this.parent(index)
       }
    }
    print(){
        console.log(this.heap)
    }

    delete(){
        if(this.heap.length === 0)return 0
        if(this.heap.length== 1)return this.heap.pop()
        let maxval = this.heap[0]
        this.heap[0]= this.heap.pop()
        this.heapifydown(0)
        return maxval

    }
    heapifydown(index){
        let largest = index

        let left = this.leftChild(largest)
        let righ = this.rightchild(largest)

        if(left < this.heap.length && this.heap[largest]<this.heap[left]){
            largest = left
        }
        if(righ < this.heap.length&& this.heap[largest]<this.heap[righ]){
            largest = righ
        }

        if(largest!=index){
            [this.heap[largest],this.heap[index]]= [this.heap[index],this.heap[largest]]
            this.heapifydown(largest)
        }
    }
    heapSort(){
        let tempHeap = [...this.heap]
        let arr = []

        while(this.heap.length > 0){
            arr.push(this.delete())
        }
        this.heap = tempHeap
        console.log(arr)
    }
    
}


let heap = new MaxHeap()
heap.insert(4)
heap.insert(5)
heap.insert(3)
heap.insert(9)
heap.insert(8)
heap.insert(6)
heap.heapSort()
heap.delete()
heap.delete()
heap.print()