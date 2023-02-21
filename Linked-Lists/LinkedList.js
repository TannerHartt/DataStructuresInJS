import {
    insertionSort,
    insertionSortHelperFunction,
    contains
} from '../functions.js';

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

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Get head of list
    getHead() { return this.head; }

    // Get tail of list
    getTail() { return this.tail; }

    // Get list size
    getSize() { return this.size; }

    ////
    // Insert node at the beginning
    unshift(data) {
        if (!this.head) { 
            let node = new Node(data);
            this.head = node;
            this.tail = node;
        } else {
            this.head = new Node(data, this.head);
        }
        this.size++;
        return this;
    }

    ////
    // Insert node at the end
    push(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return this;
    }

    ////
    // Insert node at an index
    insertAt(index, data) {
        // If index is out of range
        if (index > 0 && index > this.size || index < 0) return false;

        // Inserting at the beginning of the list
        if (index === 0) return this.unshift(data);

        // Inserting at the end of the list
        if (index === this.size) return this.push(data);
        
        const temp = this.getAt(index - 1); // Get node 1 before desired index
        const node = new Node(data, temp.next);
        temp.next = node;
        this.size++; // Increment list size by 1
        return true;
    }

    ////
    // Get node at an index
    // O(n) time complexity
    getAt(index) {
        if (index >= this.size || index < 0) return null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    ////
    // Updates node at an index
    setAt(index, value) {
        if (index >= this.size || index < 0) return null;
        let temp = this.getAt(index);
        if (temp) {
            temp.data = value;
            return true;
        }
        return false;
    }

    ////
    // Remove node at an index
    removeAt(index) {
        if (index >= this.size || index < 0) return null;
        if (index === 0) return this.shift();
        if (index === this.size - 1) return this.pop();
        let prev = this.getAt(index - 1);
        let temp = prev.next;
        temp.next = null;
        this.size--;
        return temp;
    }

    ////
    // Remove first
    shift() {
        if (!this.head) return null;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.size--;
        if (this.size === 0) { 
            this.tail = null; // If list is empty, set tail to null to to break last pointer & avoid memory leaks
        }
        return temp;
    }

    ////
    // Remove last
    pop() {
        if (!this.head) return null;
        if (this.size === 1) {
            let temp = this.head;
            this.head = null;
            this.tail = null;
            this.size--;
            return temp;
        }  
 
        let previous = this.head;
        let current = this.head.next;

        while (current.next) {
            previous = current;
            current = current.next;
        }
        this.tail = previous;
        this.tail.next = null;
        this.size--;
        if (this.size === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    ////
    // Create list with mulitple elements
    createAndFillList(...data) {
        for (let i = data.length - 1; i >= 0; i--) {
            this.head = new Node(data[i], this.head);
            this.size++;
        }
        this.tail = this.getAt(this.size - 1);
        return this.head;
    }

    // Sort the list using the insertion sort algorithm
    insertionSort() {
        let result = null;
        let current = this.head;
        let next;

        //Iterate the loop
        while(current !== null){
            next = current.next;

            //Sort the linked list till the current element and store it
            result = insertionSortHelperFunction(result, current);
            current = next;
        }

        //Return the sorted list
        return result;
    }

    // Move head to last element
    moveHeadToLast(head) {
        if (head === null || head.next === null) return head;
        let first = head;
        let last = head;

        while (last.next !== null) {
            last = last.next;
        }

        this.head = first.next;
        first.next = null;
        last.next = first;

        return this;
    }

    // Move tail to front
    moveTailToFront(head) {
        // Proceed only if list is not empty or has more than one element
        if (head === null || head.next === null) return;
        let secondLast = null;
        let last = head;

        while(last.next != null) {
            secondLast = last;
            last = last.next;
        }
        if (secondLast) {
            secondLast.next = null;
            last.next = this.head;
            this.head = last;
        }
        return this;
    }

    // Convert the list to a single string with spaces.
    convertToString() {
        let temp = this.head;
        let str = "";

        while(temp) {
            if (temp.next) {
                str = str.concat(temp.data).concat(" ");
            } else {
                str = str.concat(temp.data);
            }
            temp = temp.next;
        }
        return str;
    }

    // Convert to array
    convertToArray() {
        let temp = this.head;
        let arr = [];

        while(temp !== null) {
            arr.push(temp.data);
            temp = temp.next;
        }
        return arr;
    }

    ////
    // Clear the list
    clearList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Print list data
    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next; // Iterate through list
        }
    }

    ////
    // O(n) time complexity
    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;

        for (let i = 0; i < this.size; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }

    // Returns true if the list contains the passed value
    contains(data) {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    
    // True is the list is empty
    isEmpty() { return this.size === 0; }

    // Insert after a target value
    insertAfter(insertData, targetValue) {
        if (this.head === null || this.head.next === null || !contains(this.head, targetValue)) return;
        let curr = this.head;

        while(curr !== null) {
            if (curr.getData() == targetValue) break;
            curr = curr.next;
        }

        let temp = new Node(insertData, curr.next);
        curr.next = temp;
        this.size++;
        
        return this.head;
    }

    // Insert before a target value
    insertBefore(insertData, targetValue) {
        if (this.head === null || this.head.next === null || !this.contains(targetValue)) return;
        let curr = this.head;
        let prev = null;

        while(curr !== null) {
            if (curr.getData() == targetValue) break;

            prev = curr;
            curr = curr.next;
        }        

        let temp = new Node(insertData);

        if (prev === null) {
            temp.next = curr;
            this.head = temp;
        } else {
            temp.next = curr;
            prev.next = temp;
        }
        this.size++;
        return this.head;
    }

     // Remove target element from list
    removeTargetElement(target) {
        if (this.head === null || this.head.next === null || !this.contains(target)) return;
        if (this.size === 0) return this.head;
        let current = this.head;
        let prev = null;

        while(current !== null) {
            if (current.getData() == target) {
                break;
            }
            prev = current;
            current = current.next;
        }
        prev.next = current.next;
        this.size--;
        return this.head;
    }
}
