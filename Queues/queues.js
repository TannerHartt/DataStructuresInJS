export class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

    getData() { return this.data; }

    setData(data) { this.data = data; }

    getNext() { return this.next; }

    setNext(next) { this.next = next; }
}

export default class Queue {
    constructor(data = null) {
        if (data !== null) {
            const node = new Node(data)
            this.first = node;
            this.last = node;
            this.size = 1;
        } else {
            this.first = null;
            this.last = null;
            this.size = 0;
        }
    }
    
    // Get size of queue
    getSize() { return this.size; }

    // Get first node in queue
    getFirst() { return this.first; }

    // Get last node in queue
    getLast() { return this.last; }

    // Add a new node to the end of the queue
    enqueue(data) {
        const node = new Node(data);
        if (this.size === 0) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this;
    }

    // Remove the front element and return it
    dequeue() {
        if (this.size === 0) return null;
        const node = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            node.next = null;
        }
        this.size--;
        return node;
    }

    clear() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}