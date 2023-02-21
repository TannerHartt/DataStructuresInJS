import Node from './Linked-Lists/LinkedList.js';
// TODO - include size properties in function

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


export function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
