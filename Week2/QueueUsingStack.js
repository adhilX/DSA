class QueueUsingStack{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }
    enqueue(value){
        this.stack1.push(value)
    }
    dequeue(){
        while(this.stack1.length === 0 && this.stack2.length ===0){
            return 'queue underflow'
        }
          while(this.stack1.length > 1){
            this.stack2.push(this.stack1.pop())
       }
        this.stack2.pop()
    }


    front(){
      while(this.stack1.length === 0 && this.stack2.length ===0){
            return 'queue is empty'
        }
        if(this.stack2.length === 0){
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2[this.stack2.length-1]
    }
}

let q = new QueueUsingStack()

q.enqueue(3)
q.enqueue(8)
q.enqueue(2)
q.dequeue()
console.log(q.front())