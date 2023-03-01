import CircularLinkedList from './circular';
import CircularDoublyLinkedList from "./circular";
import { describe, expect, it, beforeEach, afterEach } from 'vitest';

describe.skip("Circular Singly LinkedLists", () => {
    let list;

    beforeEach(() => {
        list = new CircularLinkedList();
    });

    afterEach(() => { 
        list.clearList();
    });

    it("Should push a new node on to the list", () => {
        list.push(1);
        list.push(2);
        list.push(3);
        expect(list.getSize()).toBe(3);
        expect(list.getHead().data).toBe(1);
        expect(list.getTail().data).toBe(3);
        expect(list.getTail().next.data).toBe(1);
    });

    it("Should pop a node off the end of a list and return it", () => {
        list.push(1);
        list.push(2);
        list.push(3);
        expect(list.getSize()).toBe(3);
        expect(list.getHead().data).toBe(1);
        expect(list.getTail().data).toBe(3);

        expect(list.pop().data).toBe(3);
        expect(list.getSize()).toBe(2);
        expect(list.getHead().data).toBe(1);
        expect(list.getTail().data).toBe(2);

        expect(list.pop().data).toBe(2);
        expect(list.getSize()).toBe(1);
        expect(list.getHead().data).toBe(1);
        expect(list.getTail().data).toBe(1);

        expect(list.pop().data).toBe(1);
        expect(list.getSize()).toBe(0);
        expect(list.getHead()).toBeFalsy();
        expect(list.getTail()).toBeFalsy();

        expect(list.pop()).toBeFalsy(); // Pop on an empty list
    });

    it("Should insert a node at the beginning", () => {
        list.push(1);
        list.push(2);
        list.push(3);
        expect(list.getSize()).toBe(3);
        expect(list.getHead().data).toBe(1);
        expect(list.getTail().data).toBe(3);
        expect(list.getTail().next.data).toBe(1);

        list.unshift(6);
        expect(list.getSize()).toBe(4);
        expect(list.getHead().data).toBe(6);
        expect(list.getTail().data).toBe(3);
        expect(list.getTail().next.data).toBe(6);

        list.unshift(3);
        expect(list.getSize()).toBe(5);
        expect(list.getHead().data).toBe(3);
        expect(list.getTail().data).toBe(3);
        expect(list.getTail().next.data).toBe(3);

        list.clearList();
        list.unshift(2);
        expect(list.getSize()).toBe(1);
        expect(list.getHead().data).toBe(2)
        expect(list.getTail().data).toBe(2)
        expect(list.getTail().next.data).toBe(2)
    });

    it.only("Should remove the node at the beginning and return it", () => {
        list.push(1);
        list.push(2);
        expect(list.getSize()).toBe(2);
        expect(list.getHead().data).toBe(1);
        expect(list.getTail().data).toBe(2);

        expect(list.shift().data).toBe(1);
        expect(list.getSize()).toBe(1);
        expect(list.getHead().data).toBe(2);
        expect(list.getTail().data).toBe(2);
        expect(list.getTail().next.data).toBe(2);

        expect(list.shift().data).toBe(2);
        expect(list.getSize()).toBe(0);
        expect(list.getHead().data).toBe(2);
        expect(list.getTail().data).toBe(2);
        expect(list.getTail().next.data).toBe(2);


        list.clearList();
        expect(list.shift()).toBeNull();
    });
});



describe.only("Circular Doubly LinkedLists", () => {
    let list;

    beforeEach(() => {
        list = new CircularDoublyLinkedList();
    });

    afterEach(() => { 
        list.clearList();
    });

    it.only("Should push a new node on to the list", () => {
        list.push(1);
        list.push(2);
        list.push(3);
        expect(list.getSize()).toBe(3);
        expect(list.getHead().data).toBe(1);
        expect(list.getHead().prev.data).toBe(3);
        expect(list.getHead().next.data).toBe(2);
        expect(list.getTail().data).toBe(3);
        expect(list.getTail().next.data).toBe(1);
        expect(list.getTail().prev.data).toBe(2);
    });

    it.skip("Should push a new node on to the list", () => {
        list.push(1);
        list.push(2);
        list.push(3);
        expect(list.getSize()).toBe(3);
        expect(list.getHead().data).toBe(1);
        expect(list.getHead().prev.data).toBe(3);
        expect(list.getTail().data).toBe(3);
        expect(list.getTail().next.data).toBe(1);
    });


});
