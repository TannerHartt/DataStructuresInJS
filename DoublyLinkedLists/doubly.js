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


export default class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize() { return this.size; }

    getHead() { return this.head; }

    getTail() { return this.tail; }

    updateHead(data) {
        let curr = this.head;
        curr.data = data;
        return this.head = curr;
    }

    // Insert node at the end of a list
    push(data) { 
        const node = new Node(data, this.head, null);
        if (this.size === 0) { // if list is empty
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
        return this;
    }

    // Remove node from the end of list
    pop() {
        if (this.size === 0) return null; // if list is empty
        let temp = this.tail;
        if (this.size === 1) { // if list has one element
            this.head = null;
            this.tail = null;
        } else { // if list has two or more elements
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.size--;
        return temp; // return the node that was removed
    }

    // Add node to the beginning of list
    unshift(data) { 
        const node = new Node(data);
        if (this.size === 0) { // if list is empty
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
        return this;
    }

    // Remove node from the beginning of list
    shift() {
        if (this.size === 0) return null; // if list is empty
        let temp = this.head;
        if (this.size === 1) { // if list has one element
            this.head = null;
            this.tail = null;
        } else { // if list has two or more elements
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.size--;
        return temp; // return the node that was removed
    }

    // Insert node at index
    insert(index, data) {
        if (index > 0 && index > this.size || index < 0) return false; // If index is out of range
        if (index === 0) return this.unshift(data); // Inserting at the beginning of the list
        if (index === this.size) return this.push(data); // Inserting at the end of the list

        const before = this.get(index - 1); // Get node 1 before desired index
        const node = new Node(data, before.next);
        const after = before.next;
        before.next = node;
        node.next = after;
        after.prev = node;
        node.prev = before;
        this.size++; // Increment list size by 1
        return true;
    }

    // Get node at index (optimized version)
    get(index) {
        if (index >= this.size || index < 0) return false;
        let temp = this.head;
        if (index < this.size / 2) { // If index is closer to the head
            for (let i = 0; i < index; i++) { // Loop from the front
                temp = temp.next;
            }
        } else { // If index is closer to the tail
            temp =  this.tail;
            for (let i = this.size - 1; i > index; i--) { // Loop from the back
                temp = temp.prev;
            }
        }
        return temp;
    }

    // Another way to get node at index (unoptimized version)
    getAt(index) {
        if (index >= this.size || index < 0) return false;
        else {
            let current = this.head;
            let count = 0;

            while (count < index) {
                count++;
                current = current.next;
            }
            return current;
        }
    }

    // Update node at index
    set(index, value) {
        if (index >= this.size || index < 0) return false;
        let temp = this.get(index);
        if (temp) {
            temp.data = value;
            return true;
        }
        return false;
    }

    // Remove node at index
    remove(index) {
        if (index >= this.size || index < 0) return false; // If index is out of range
        if (index === 0) return this.shift(); // Removing from the beginning of the list
        if (index === this.size - 1) return this.pop(); // Removing from the end of the list

        const temp = this.getAt(index); // Get node 1 before desired index
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.next = null;
        temp.prev = null;
        this.size--; // Decrement list size by 1
        return temp; // Return the node that was removed
    }

    // Fills a list with any amount of passed values (works on empty or non-empty lists)
    fillList(...data) {
        for (let i = 0; i < data.length; i++) {
            this.push(data[i]); 
        }
        return this.head;
    }

    // Clear list
    clearList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Print list data

    // Print list data in reverse

    // Reverse list

    // Sort list

    // Set tail of list

    // Create and fill list

    // Move tail to head 

    // Move head to tail

    // Convert to array
    convertToArray() {
        let values = [];
        let current = this.head;
        while (current !== null) {
            values.push(current.data);
            current = current.next;
        }
        return values;
    }

    // Convert from array
    

    // Convert to string
    convertToString() {
        let temp = this.head;
        let str = '';

        while(temp !== null) {
            if (temp.next) {
                str = str.concat(temp.data).concat(" ");
            } else {
                str = str.concat(temp.data);
            }
            temp = temp.next;
        }
        return str;
    }

    // Convert from string

    // Convert to JSON
    convertToJSON() {
        let results = {};
        let temp = this.head;

        while (temp !== null) {
            
        }
    }

    // Convert from JSON

    // Contains

    // Find index of node
    getIndexOf(value) {
        if (this.size === 0) return 0;
        let curr = this.head;
        let count = 0;

        while (curr.next !== null) {
            if (curr.data === value) return count;
            curr = curr.next;
            count++;
            if (count > this.size) break;
        }
        return 0;
    }

    // Find node

    // Insert node before

    // Insert node after

    // Empty?

    // Is head?

    // Is tail?

    // Print list
}
