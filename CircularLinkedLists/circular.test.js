import CircularLinkedList from './circular';
import { describe, expect, it, beforeEach, afterEach } from 'vitest';

describe("Doubly LinkedList", () => {
    let linkedList;

    beforeEach(() => {
        linkedList = new CircularLinkedList();
    });

    afterEach(() => { 
        linkedList.clearList();
    });

    it("Should push a new node on to the list", () => {
        
    });

});






