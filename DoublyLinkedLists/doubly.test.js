import DoublyLinkedList from './doubly';
import { describe, expect, it, beforeEach, afterEach } from 'vitest';

describe("Doubly LinkedList", () => {
    let linkedList;

    beforeEach(() => {
        linkedList = new DoublyLinkedList();
    });

    afterEach(() => { 
        linkedList.clearList();
    });

    it("Should push a new node on to the list", () => {
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
    
        expect(linkedList.head.data).toBe(1);
        expect(linkedList.head.next.data).toBe(2);
        expect(linkedList.head.next.next.data).toBe(3);
        expect(linkedList.getSize()).toBe(3);
        expect(linkedList.getTail().data).toBe(3);

        linkedList.push(5);
        expect(linkedList.head.data).toBe(1);
        expect(linkedList.head.next.data).toBe(2);
        expect(linkedList.getSize()).toBe(4);
        expect(linkedList.getTail().data).toBe(5);
    });

    it("Should clear a list of any amount of elements", () => {
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
        linkedList.push(4);
        linkedList.push(5);
        linkedList.push(6);

        expect(linkedList.getSize()).toBe(6);
        expect(linkedList.getTail().data).toBe(6);
        expect(linkedList.getHead().data).toBe(1);

        linkedList.clearList();
        expect(linkedList.getSize()).toBe(0);
        expect(linkedList.getTail()).toBeFalsy();
        expect(linkedList.getHead()).toBeFalsy();
    });

    it("Should pop a node off the end of the list", () => {
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
        linkedList.push(4);

        // Before popping
        expect(linkedList.getSize()).toBe(4);
        expect(linkedList.getTail().data).toBe(4);
        expect(linkedList.getHead().data).toBe(1);
        
        // Popping on list of more than two elements
        expect(linkedList.pop().data).toBe(4);
        expect(linkedList.getTail().data).toBe(3);
        expect(linkedList.getHead().data).toBe(1);
        expect(linkedList.getSize()).toBe(3);

        // Popping on list of more than two elements
        expect(linkedList.pop().data).toBe(3);
        expect(linkedList.getTail().data).toBe(2);
        expect(linkedList.getHead().data).toBe(1);
        expect(linkedList.getSize()).toBe(2);

        // Popping on list of two elements
        expect(linkedList.pop().data).toBe(2);
        expect(linkedList.getTail().data).toBe(1);
        expect(linkedList.getHead().data).toBe(1);
        expect(linkedList.getSize()).toBe(1);

        // Popping on list of one element
        expect(linkedList.pop().data).toBe(1);
        expect(linkedList.getTail()).toBeFalsy();
        expect(linkedList.getHead()).toBeFalsy();
        expect(linkedList.getSize()).toBe(0);

        // Popping on empty list
        expect(linkedList.pop()).toBeFalsy();
    });

    it("Should insert a new node to the front of the list", () => {
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
        
        // Before operation
        expect(linkedList.getSize()).toBe(3);
        expect(linkedList.getTail().data).toBe(3);
        expect(linkedList.getHead().data).toBe(1);

        // After operation
        linkedList.unshift(11);
        expect(linkedList.getSize()).toBe(4);
        expect(linkedList.getTail().data).toBe(3);
        expect(linkedList.getHead().data).toBe(11);
    });

    it("Should insert a new node to the front of the list", () => {
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
        
        // Before operation
        expect(linkedList.getSize()).toBe(3);
        expect(linkedList.getTail().data).toBe(3);
        expect(linkedList.getHead().data).toBe(1);

        // After operation
        expect(linkedList.shift().data).toBe(1);
        expect(linkedList.getSize()).toBe(2);
        expect(linkedList.getTail().data).toBe(3);
        expect(linkedList.getHead().data).toBe(2);

        expect(linkedList.shift().data).toBe(2);
        expect(linkedList.getSize()).toBe(1);
        expect(linkedList.getTail().data).toBe(3);
        expect(linkedList.getHead().data).toBe(3);

        expect(linkedList.shift().data).toBe(3);
        expect(linkedList.getSize()).toBe(0);
        expect(linkedList.getTail()).toBeFalsy();
        expect(linkedList.getHead()).toBeFalsy();

        expect(linkedList.shift()).toBeFalsy();
        expect(linkedList.getSize()).toBe(0);
        expect(linkedList.getTail()).toBeFalsy();
        expect(linkedList.getHead()).toBeFalsy();
    });

    it("Should get a node at a specified index", () => {
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
        linkedList.push(4);

        // Before operation
        expect(linkedList.getSize()).toBe(4);
        expect(linkedList.getTail().data).toBe(4);
        expect(linkedList.getHead().data).toBe(1);
        
        // Operations
        expect(linkedList.get(0).data).toBe(1);
        expect(linkedList.get(3).data).toBe(4);
        expect(linkedList.get(1).data).toBe(2);
        expect(linkedList.get(2).data).toBe(3);
        expect(linkedList.get(5)).toBeFalsy(); // Out of bounds
        expect(linkedList.get(-1)).toBeFalsy(); // Out of bounds
    });

    it("Should update the value of a node at a specified index", () => {
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
        linkedList.push(4);

        // Before operation
        expect(linkedList.getSize()).toBe(4);
        expect(linkedList.getTail().data).toBe(4);
        expect(linkedList.getHead().data).toBe(1);
        
        // Operations
        linkedList.set(0, 25);
        expect(linkedList.getHead().data).toBe(25);
        expect(linkedList.getTail().data).toBe(4);
        expect(linkedList.getSize()).toBe(4);
        expect(linkedList.set(-1, 99)).toBeFalsy(); // Out of bounds
        expect(linkedList.set(10, 99)).toBeFalsy(); // Out of bounds

        linkedList.set(3, 25);
        expect(linkedList.getHead().data).toBe(25);
        expect(linkedList.getTail().data).toBe(25);
        expect(linkedList.getSize()).toBe(4);
        expect(linkedList.set(-1, 99)).toBeFalsy(); // Out of bounds
        expect(linkedList.set(10, 99)).toBeFalsy(); // Out of bounds
    });

    it("Should insert a node at a specified index", () => {
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
        linkedList.push(4);

        // Before operation
        expect(linkedList.getSize()).toBe(4);
        expect(linkedList.getTail().data).toBe(4);
        expect(linkedList.getHead().data).toBe(1);
        
        // Operations
        linkedList.insert(0, 25);
        expect(linkedList.getHead().data).toBe(25);
        expect(linkedList.getTail().data).toBe(4);
        expect(linkedList.getSize()).toBe(5);
        expect(linkedList.insert(-1, 99)).toBeFalsy(); // Out of bounds
        expect(linkedList.insert(10, 99)).toBeFalsy(); // Out of bounds

        linkedList.insert(linkedList.getSize(), 25);
        expect(linkedList.getHead().data).toBe(25);
        expect(linkedList.getTail().data).toBe(25);
        expect(linkedList.getSize()).toBe(6);
        expect(linkedList.insert(-1, 99)).toBeFalsy(); // Out of bounds
        expect(linkedList.insert(10, 99)).toBeFalsy(); // Out of bounds
    });

    it("Should remove and return a node at a specified index", () => {
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
        linkedList.push(4);

        // Before operation
        expect(linkedList.getSize()).toBe(4);
        expect(linkedList.getTail().data).toBe(4);
        expect(linkedList.getHead().data).toBe(1);
        
        // Operations
        linkedList.remove(0)
        expect(linkedList.getHead().data).toBe(2);
        expect(linkedList.getTail().data).toBe(4);
        expect(linkedList.getSize()).toBe(3);
        expect(linkedList.remove(-1)).toBeFalsy(); // Out of bounds
        expect(linkedList.remove(10)).toBeFalsy(); // Out of bounds

        linkedList.remove(linkedList.getSize() - 1);
        expect(linkedList.getHead().data).toBe(2);
        expect(linkedList.getTail().data).toBe(3);
        expect(linkedList.getSize()).toBe(2);
        expect(linkedList.remove(-1)).toBeFalsy(); // Out of bounds
        expect(linkedList.remove(10)).toBeFalsy(); // Out of bounds
    });
});






