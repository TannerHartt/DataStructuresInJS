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

export default class Stack {
    constructor(data = null) {
        if (data !== null) {
            const node = new Node(data);
            this.top = node;
            this.size = 1;
        } else {
            this.top = null;
            this.size = 0;
        }
    }

    // Get stack size
    getSize() { return this.size; }

    // Get top of stack
    getTop() { return this.top; }

    // Clear stack
    clear() {
        this.top = null;
        this.size = 0;
    }

    // Push a new node on to the stack
    push(data) {
        const node = new Node(data);
        if (this.size === 0) this.top = node;
        else {
            node.next = this.top;
            this.top = node;
        }
        this.size++;
        return this;
    }

    // Pop a node off the stack
    pop() {
        if (this.size === 0) return null;
        const node = this.top;
        this.top = this.top.next;
        node.next = null;
        this.size--;
        return node;
    }
}
