export class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
    }
}

// Binary heap implementation
export default class PriorityQueue {
    constructor() {
        this.values = [];
    }
    
    enqueue(value, priority) {
        let node = new Node(value, priority);
        this.values.push(node);
        this._bubbleUp();
    }

    dequeue() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) { 
            this.values[0] = end;
            this._bubbleDown();
        }
        return max;
    }

    _bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element.priority <= parent.priority) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    _bubbleDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild.priority > element.priority) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (
                    (swap === null && rightChild.priority > element.priority) ||
                    (swap !== null && rightChild.priority > leftChild.priority)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
 
}