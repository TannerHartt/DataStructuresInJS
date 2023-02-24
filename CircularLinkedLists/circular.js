export class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }

    getData() { return this.data; }

    setData(data) { this.data = data; }

    getNext() { return this.next; }

    setNext(next) { this.next = next; }

    getPrev() { return this.prev; }

    setPrev(prev) { this.prev = prev; }
}

export default class CircularLinkedList {
    constructor(initial = null) { // Can support a inital size of one or 0
        if (initial === null) {
            this.head = null;
            this.tail = null;
            this.size = 0;
        } else {
            let node = new Node(initial);
            this.head = node;
            this.tail = node;
            this.size = 1;
        }
    }
}