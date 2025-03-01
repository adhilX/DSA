class StackUsingQueue {
    constructor() {
        this.q1 = [];
    }

    push(value) {
        let size = this.q1.length;
        this.q1.push(value);

        // Move all previous elements to the end
        while (size > 0) {
            this.q1.push(this.q1.shift());
            size--;
        }
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack underflow";
        }
        return this.q1.shift();
    }

    top() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.q1[0];
    }

    isEmpty() {
        return this.q1.length === 0;
    }
}

// Testing the stack
let stack = new StackUsingQueue();
stack.push(34);
console.log(stack.top()); // Output: 34
stack.push(20);
console.log(stack.top()); // Output: 20
stack.pop();
console.log(stack.top()); // Output: 34
stack.pop();
console.log(stack.pop()); // Output: Stack underflow
