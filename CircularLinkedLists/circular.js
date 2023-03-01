
// Node class to use for both versions of circular lists
export class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev; // Only for doubly version
    }

    getData() { return this.data; }
    setData(data) { this.data = data; }
    getNext() { return this.next; }
    setNext(next) { this.next = next; }
    getPrev() { return this.prev; } // Only for doubly version
    setPrev(prev) { this.prev = prev; } // Only for doubly version
}

// Singly linked list version of a circular list
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
            this.tail.next = this.head;
            this.size = 1;
        }
    }

    getSize() { return this.size }

    getHead() { return this.head }

    getTail() { return this.tail }

    clearList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // O(1)
    // Insert a node the end of the list
    push(value){
        let node = new Node(value, this.head); // Creates a new node with the head as its next.
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else { // Update tail to new node
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return this;
    }

    // O(n)
    // Remove the last element and return it.
    pop() {
        if (!this.head || this.size === 0) return null; // If list is empty
        if (this.size === 1) { // If list has one element
            let temp = this.head;
            this.head = null;
            this.tail = null;
            this.size--;
            return temp;
        }
        // If list has more than one element
        let previous = this.head;
        let current = this.head.next;

        while (current !== this.tail) { // Loop until tail is found
            previous = current;
            current = current.next;
        }
        previous.next = this.head; // Create circular loop back to head
        this.tail = previous; // Update tail
        current.next = null; // Remove last pointer
        this.size--; // Decrement size
        return current; // Return the removed node
    }

    // O(1)
    // Remove first node of the list and return it
    shift() {
        if (!this.head || this.size === 0) return null;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.tail.next = this.head
        this.size--;
        return temp;
    }

    // O(1)
    // Insert a node at the beginning
    unshift(value) {
        if (!this.head || this.size === 0) { 
            let node = new Node(value);
            this.head = node;
            this.tail = node;
            this.tail.next = this.head;
        } else {
            this.head = new Node(value, this.head);
            this.tail.next = this.head;
        }
        this.size++;
        return this;
    }

    fillList(...data) {
        for(let i = 0; i < data.length; i++) {
            this.push(data[i]);
        }
        return this;
    }
}

// Doubly linked list version of a circular list
export class CircularDoublyLinkedList {
    constructor(initial = null) {
        if (initial === null) {
            this.head = null;
            this.tail = null;
            this.size = 0;
        } else {
            let node = new Node(initial);
            this.head = node;
            this.tail = node;
            this.tail.next = this.head;
            this.size = 1;
        }
    }

    clearList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // FIX IMPLEMENTING
    push(value) {
        const node = new Node(value, this.head);
        if (this.size === 0) { // if list is empty
            this.head = node;
            this.tail = node;
            this.head.prev = this.tail;
        } else {
            this.tail.next = node;
            node.next = this.head;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
        return this;
    }

    pop() {

    }

    unshift(value) {

    }

    shift() {

    }
}