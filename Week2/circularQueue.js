function createCircularQueue(size) {
    let queue = new Array(size);
    let front = -1;
    let rear = -1;

    function isFull() {
        return (front === 0 && rear === size - 1) || (rear === (front - 1) % (size - 1));
    }

    function isEmpty() {
        return front === -1;
    }
 
    function enqueue(element) {
        if (isFull()) {
            console.log("Queue is full");
            return;
        } else if (front === -1) { // First element
            front = rear = 0;
        } else if (rear === size - 1 && front !== 0) {
            rear = 0;
        } else {
            rear++;
        }
        queue[rear] = element;
    }

    function dequeue() {
        if (isEmpty()) {
            console.log("Queue is empty");
            return;
        }

        let element = queue[front];
        queue[front] = null;

        if (front === rear) { // Queue has only one element
            front = rear = -1;
        } else if (front === size - 1) {
            front = 0;
        } else {
            front++;
        }

        return element;
    }

    function peek() {
        if (isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        return queue[front];
    }

    function display() {
        if (isEmpty()) {
            console.log("Queue is empty");
            return;
        }

        let result = [];
        if (rear >= front) {
            for (let i = front; i <= rear; i++) {
                result.push(queue[i]);
            }
        } else {
            for (let i = front; i < size; i++) {
                result.push(queue[i]);
            }
            for (let i = 0; i <= rear; i++) {
                result.push(queue[i]);
            }
        }
        console.log(result.join(' '));
    }

    return {
        enqueue,
        dequeue,
        peek,
        display,
        isFull,
        isEmpty
    };
}

// Example usage:
const cq = createCircularQueue(5);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.display(); // Output: 10 20 30
cq.dequeue();
cq.display(); // Output: 20 30