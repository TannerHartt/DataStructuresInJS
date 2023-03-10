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
    // Create list with mulitple elements
    fillList(...data) {
        for (let i = 0; i < data.length; i++) {
            this.push(data[i]); 
        }
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

    // Creates a new list from an array of values
    fromArray(array) {
        array.forEach((value) => this.push(value));
        return this;
    }

    ////
    // Clear the list
    clearList() { 
        this.head = null; // Sets both pointers to null
        this.tail = null; // Letting list data get garbage collected
        this.size = 0;
    }

    // Print list data
    printListData() {
        let current = this.head; // Temp pointer to loop through the list without altering it.
        while(current) { // While not null
            console.log(current.data); // Print the list - where to implement other print logic
            current = current.next; // Iterate through list
        }
    }

    ////
    // O(n) time complexity
    reverse() {
        let temp = this.head; // Temp pointer to swap head and tail
        this.head = this.tail; // Swapping head and tail
        this.tail = temp;
        let next = temp.next; // Temp pointer to loop through list w/o altering it
        let prev = null; // Temp pointer to track the previous element while looping

        for (let i = 0; i < this.size; i++) { // Loop
            // Swap values
            next = temp.next;
            temp.next = prev;
            
            // Cycle pointers
            prev = temp; 
            temp = next;
        }
        return this;
    }

    // Returns true if the list contains the passed value
    contains(data) {
        let current = this.head; // Temp pointer
        while (current !== null) { // Loop through list
            if (current.data === data) { // If value is found
                return true;
            }
            current = current.next; // Cycle pointer
        }
        return false; // Value not found
    }
    
    // True is the list is empty
    isEmpty() { return this.size === 0; } // Shorthand to return true if the list size is 0

    // Insert new node after a target value
    insertAfter(data, targetValue) {
        if (this.size === 0 || this.head === null) return false; // Base cases
        let current = this.head; // Temp pointer to loop through list

        while (current) { // While not null
            if (current.data === targetValue) break; // If value is found, break loop
            current = current.next; // Cycle pointer
        }
        if (current === null) return this.head; // Value wasnt found
        let node = new Node(data, current.next); // Create node to insert
        current.next = node;
        this.size++;
        return this.head;
    }

    // Insert before a target value
    insertBefore(insertData, targetValue) {
        if (this.head === null || this.size === 0) return;
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
        if (this.head === null) return null;
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


// Takes two linked lists and merges them into one but does not sort them.
export function mergeTwoLinkedLists(headOne, headTwo) {
  let list1 = headOne;
  let list1Prev = null;
  let list2 = headTwo;

  while (list1 !== null && list2 !== null) {
    // If smaller value belongs to first list
    // advance to next node in first list
    if (list1.value < list2.value) {
      list1Prev = list1;
      list1 = list1.next;
    } else {
      // Otherwise, advance to next node in second
      if (list1Prev !== null) list1Prev.next = list2;
      list1Prev = list2;
      list2 = list2.next;
      list1Prev.next = list1;
    }
  }

  if (list1 === null) list1Prev.next = list2;

  return headOne.value < headTwo.value ? headOne : headTwo;
}

// Takes in a linked list and returns it with the last element moved to the front.
export function moveLastToFront(head) { // Same as class function but without having to call it on a list object.
  let last = head;
  let secLast = null;

  while (last.next) {
    secLast = last;
    last = last.next;
  }

  last.next = head;
  head = last;
  if (secLast) secLast.next = null;
  return head;
}

// Takes in a linked list and returns it with the first element moved to the end.
export function moveFirstToLast(head) { // Same as class function but without having to call it on a list object.
  if (head === null || head.next === null) return head;
  let first = head;
  let last = head;
  while (last.next !== null) {
    last = last.next;
  }

  head = first.next;
  first.next = null;
  last.next = first;
  return head;
}

// Takes in a linked list and return it sorted in ascending order using insertion sort.
export function insertionSort(head) { // Same as class function but without having to call it on a list object.
  let result = null;
  let current = head;
  let next;

  // Iterate the loop
  while(current !== null){
    next = current.next;

    // Sort the linked list till the current element and store it
    result = insertionSortHelperFunction(result, current);
    current = next;
  }

  // Return the sorted list
  return result;
}

// Helper function for insertionSort on linked lists
export function insertionSortHelperFunction(sorted, newNode) {
  // Temporary node to swap the elements
  let temp = new Node();
  let current = temp;
  temp.next = sorted;

  // Sort the list based on the specified order
  while(current.next !== null && current.next.data < newNode.data) {
    current = current.next;
  }

  // Swap the elements
  newNode.next = current.next;
  current.next = newNode;

  // Return the sorted list.
  return temp.next;
}

// A standalone version of the Linked List function to test if a list contains a value
export function contains(head, data) {
  if (head === null || head.next === null) return;
  let current = head;
  while (current !== null) {
      if (current.data === data) {
          return true;
      }
      current = current.next;
  }
  return false;
}

// Standalone function to reverse a linked list
export function reverse(head) { 
  let previous = null;
  let current = head;
  let next;
  while (current != null){
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
  }
  head = previous;
  return previous;
}