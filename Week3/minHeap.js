class MinHeap {
    constructor() {
        this.heap = [];
    }

    parent(i) { return Math.floor((i - 1) / 2); }
    leftChild(i) { return 2 * i + 1; }
    rightChild(i) { return 2 * i + 2; }

    // Insert a value into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // Heapify up to maintain min heap property
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[this.parent(index)] > this.heap[index]) {
            [this.heap[this.parent(index)], this.heap[index]] = [this.heap[index], this.heap[this.parent(index)]];
            index = this.parent(index);
        }
    }

    // Remove and return the minimum element (root)
    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    // Heapify down to maintain min heap property
    heapifyDown(index) {
        let smallest = index;
        const left = this.leftChild(index);
        const right = this.rightChild(index);

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapifyDown(smallest);
        }
    }

    // Get the minimum element (root)
    getMin() {
        return this.heap.length ? this.heap[0] : null;
    }
}

// ✅ **Example Usage**
const minHeap = new MinHeap();
minHeap.insert(50);
minHeap.insert(30);
minHeap.insert(40);
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
console.log("Min Heap:", minHeap.heap);

console.log("Extracted Min:", minHeap.extractMin());
console.log("Min Heap after extraction:", minHeap.heap);
