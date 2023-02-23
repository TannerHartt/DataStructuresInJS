import LinkedList from './LinkedList';
import { describe, expect, it, beforeEach, afterEach } from 'vitest';
import { insertionSort } from '../functions';

describe("LinkedList", () => {
    let linkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
    });

    afterEach(() => { 
        linkedList.clearList();
    });

    it("adds a new node to the list", () => {
        linkedList.push(1);
        linkedList.push(3);
        linkedList.push(5);

        expect(linkedList.head.data).toBe(1);
        expect(linkedList.head.next.data).toBe(3);
        expect(linkedList.head.next.next.data).toBe(5);
        expect(linkedList.getSize()).toBe(3);
        expect(linkedList.tail.data).toBe(5);
        expect(linkedList.tail.next).toBeFalsy();
    });

    it("Should remove the last item and return it if one exists", () => {
        linkedList.push(1); // 1
        linkedList.push(3); // 1 3
        linkedList.push(5); // 1 3 5

        expect(linkedList.pop().data).toBe(5);
        expect(linkedList.getSize()).toBe(2);
        expect(linkedList.tail.data).toBe(3);
        expect(linkedList.tail.next).toBeFalsy();
        expect(linkedList.pop().data).toBe(3);
        expect(linkedList.getSize()).toBe(1);
        expect(linkedList.tail.data).toBe(1);
        expect(linkedList.tail.next).toBeFalsy();
        expect(linkedList.pop().data).toBe(1);
        expect(linkedList.getSize()).toBe(0);
        expect(linkedList.tail).toBeFalsy();
        expect(linkedList.pop()).toBeFalsy();
    });

    it("adds a new node containing a string to the list", () => {
        linkedList.push("Hello");
        linkedList.push("Big");
        linkedList.push("World");

        expect(linkedList.head.data).toEqual("Hello");
        expect(linkedList.head.next.data).toEqual("Big");
        expect(linkedList.head.next.next.data).toEqual("World");
        expect(linkedList.convertToString(linkedList.head)).toEqual("Hello Big World");
    });

    it("should add a node containing 1 to the list", () => {
        linkedList.push(1);

        expect(linkedList.getSize()).toBe(1);
        expect(linkedList.head.data).toBe(1);
    });

    it("Should remove the first element and return it", () => {
        linkedList.fillList(1, 2, 3, 4, 5);
        
        expect(linkedList.shift().data).toBe(1);
        expect(linkedList.getSize()).toBe(4);
        expect(linkedList.head.data).toBe(2);

        expect(linkedList.shift().data).toBe(2);
        expect(linkedList.getSize()).toBe(3);
        expect(linkedList.head.data).toBe(3);

        expect(linkedList.shift().data).toBe(3);
        expect(linkedList.getSize()).toBe(2);
        expect(linkedList.head.data).toBe(4);

        expect(linkedList.shift().data).toBe(4);
        expect(linkedList.getSize()).toBe(1);
        expect(linkedList.head.data).toBe(5);

        expect(linkedList.shift().data).toBe(5);
        expect(linkedList.getSize()).toBe(0);
        expect(linkedList.head).toBeFalsy();

        expect(linkedList.shift()).toBeFalsy();
        expect(linkedList.tail).toBeFalsy();
    });

    it("should add a node to the front on the list", () => {
        linkedList.unshift(1);
        expect(linkedList.getSize()).toBe(1);
        expect(linkedList.head.data).toBe(1);
        expect(linkedList.getTail().data).toBe(1);

        linkedList.unshift(2);
        expect(linkedList.getSize()).toBe(2);
        expect(linkedList.head.data).toBe(2);
        expect(linkedList.getTail().data).toBe(1);

        linkedList.unshift(3);
        expect(linkedList.getSize()).toBe(3);
        expect(linkedList.head.data).toBe(3);
        expect(linkedList.getTail().data).toBe(1);

        linkedList.unshift(4);
        linkedList.unshift(5);
        linkedList.unshift(6);
        expect(linkedList.getSize()).toBe(6);
        expect(linkedList.head.data).toBe(6);
        expect(linkedList.getTail().data).toBe(1);
    });

    it("Should update a node at an index", () => {
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
        linkedList.push(4);

        expect(linkedList.getAt(0).data).toBe(1);
        expect(linkedList.getHead().data).toBe(1);
        expect(linkedList.head.data).toBe(1);
        expect(linkedList.getSize()).toBe(4);
        expect(linkedList.head.next.data).toBe(2);
        expect(linkedList.getTail().data).toBe(4);

        linkedList.setAt(0, 5)
        expect(linkedList.head.data).toBe(5);
        expect(linkedList.getSize()).toBe(4);
        expect(linkedList.head.next.data).toBe(2);
        expect(linkedList.getTail().data).toBe(4);

        linkedList.setAt(0, 1);
        expect(linkedList.getAt(0).data).toBe(1);
        expect(linkedList.getHead().data).toBe(1);
        expect(linkedList.head.data).toBe(1);
        expect(linkedList.getSize()).toBe(4);
        expect(linkedList.head.next.data).toBe(2);
        expect(linkedList.getTail().data).toBe(4);

        linkedList.setAt(linkedList.getSize() - 1, 6);
        expect(linkedList.getTail().data).toBe(6);
        expect(linkedList.getSize()).toBe(4);
        expect(linkedList.head.data).toBe(1);
        expect(linkedList.head.next.data).toBe(2);
    });

    it("Should fill the list with mulitple numbers and return the element at an index", () => {
        linkedList.fillList(1, 1, 5, 55, 555, 5555, 55555, 1, 2, 3);

        expect(linkedList.getAt(0).data).toEqual(1);
        expect(linkedList.getAt(1).data).toEqual(1);
        expect(linkedList.getAt(2).data).toEqual(5);
        expect(linkedList.getAt(3).data).toEqual(55);
        expect(linkedList.getAt(4).data).toEqual(555);
        expect(linkedList.getAt(5).data).toEqual(5555);
        expect(linkedList.getAt(6).data).toEqual(55555);
        expect(linkedList.getAt(10)).toBeFalsy(); // Out of bounds
        expect(linkedList.getAt(-1)).toBeFalsy(); // Out of bounds
    });

    // TODO - Fix fillList to include this.tail property
    it("Should return the last node in the list", () => {
        linkedList.fillList(1, 1, 5, 55, 5555, 555, 0);

        expect(linkedList.getTail().data).toBe(0);
        expect(linkedList.getTail().next).toBe(null);
        expect(linkedList.isEmpty()).toBeFalsy();
    });

    it("Should remove a node from the list at an index", () => {
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);

        expect(linkedList.getSize()).toBe(3);
        expect(linkedList.getAt(0).data).toBe(1);
        expect(linkedList.getAt(1).data).toBe(2);
        expect(linkedList.getAt(2).data).toBe(3);
        expect(linkedList.getTail().data).toBe(3);

        linkedList.removeAt(0);
        expect(linkedList.getSize()).toBe(2);
        expect(linkedList.getAt(0).data).toBe(2);
        expect(linkedList.getAt(1).data).toBe(3);
        expect(linkedList.getAt(2)).toBeFalsy();
        expect(linkedList.getTail().data).toBe(3);

        linkedList.removeAt(1);
        expect(linkedList.getSize()).toBe(1);
        expect(linkedList.getAt(0).data).toBe(2);
        expect(linkedList.getAt(1)).toBeFalsy();
        expect(linkedList.getTail().data).toBe(2);
    });

    it("Should return true if the list contains a value", () => {
        linkedList.fillList(1, 1, 5, 55, 555, 5555, 55555, 1, 2, 3);

        expect(linkedList.contains(5555)).toBeTruthy();
        expect(linkedList.contains(555)).toBeTruthy();
        expect(linkedList.contains(55)).toBeTruthy();
        expect(linkedList.contains(5)).toBeTruthy();
        expect(linkedList.contains(0)).toBeFalsy();
        expect(linkedList.contains(10)).toBeFalsy();
        expect(linkedList.contains(100)).toBeFalsy();
        expect(linkedList.contains(1000)).toBeFalsy();
    });

    it("Should test if the list is empty", () => {
        linkedList.clearList();
        expect(linkedList.isEmpty()).toBeTruthy();
        expect(!linkedList.isEmpty()).toBeFalsy();
    });

    it("should add a node to the list at an index", () => {
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);

        expect(linkedList.getSize()).toBe(3);
        expect(linkedList.getAt(0).data).toBe(1);
        expect(linkedList.getAt(1).data).toBe(2);
        expect(linkedList.getAt(2).data).toBe(3);

        linkedList.insertAt(0, 4);
        expect(linkedList.getSize()).toBe(4);
        expect(linkedList.getAt(0).data).toBe(4);
        expect(linkedList.getAt(1).data).toBe(1);
        expect(linkedList.getAt(2).data).toBe(2);

        linkedList.insertAt(2, 5);
        expect(linkedList.getSize()).toBe(5);
        expect(linkedList.getAt(0).data).toBe(4);
        expect(linkedList.getAt(1).data).toBe(1);
        expect(linkedList.getAt(2).data).toBe(5);

        linkedList.insertAt(linkedList.getSize(), 6);
        expect(linkedList.getSize()).toBe(6);
        expect(linkedList.getAt(0).data).toBe(4);
        expect(linkedList.getAt(1).data).toBe(1);
        expect(linkedList.getAt(linkedList.getSize() - 1).data).toBe(6);
    });

    it("Should clear a list containing many elements", () => {
        for (let i = 20; i >= 0; i--) {
            linkedList.push(i);
        }
        linkedList.clearList();
        expect(linkedList.getSize()).toBe(0);
        expect(linkedList.head).toBe(null);
        expect(linkedList.isEmpty()).toBeTruthy();
    });

    it("Should convert the list of numbers to a string separated by spaces", () => {
        linkedList.fillList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        expect(linkedList.convertToString(linkedList.head)).toBe("1 2 3 4 5 6 7 8 9 10");
        expect(linkedList.convertToString(linkedList.head)).toContain("1 2 3");
        expect(linkedList.convertToString(linkedList.head)).toContain("4 5 6");
        expect(linkedList.convertToString(linkedList.head)).toContain("7 8 9");
        expect(linkedList.convertToString(linkedList.head)).toContain("10");
    });

    it("Should sort the list using the insertion sort method", () => {
        linkedList.fillList(100, 24, 55, 23, 88, 1, 4, 2, 6, 5);
        let sorted = linkedList.insertionSort();

        expect(sorted.data).toBe(1); // Head
        expect(sorted.next.data).toBe(2); // Second Node
        expect(sorted.next.next.data).toBe(4); // Third Node
        expect(sorted.next.next.next.data).toBe(5); // Fourth Node
        expect(sorted.next.next.next.next.data).toBe(6); // Fifth Node 
        expect(sorted.next.next.next.next.next.data).toBe(23); // Sixth Node
        expect(sorted.next.next.next.next.next.next.data).toBe(24); // Seventh Node
        expect(sorted.next.next.next.next.next.next.next.data).toBe(55); // Eighth Node
        expect(sorted.next.next.next.next.next.next.next.next.data).toBe(88); // Ninth Node
        expect(sorted.next.next.next.next.next.next.next.next.next.data).toBe(100); // Tenth Node
    });

    it("Should sort the list using the standalone insertion sort method", () => {
        linkedList.fillList(22, 1, 5, 26, 77, 54, 41, 9, 100, 88);
        const sorted = insertionSort(linkedList.head);

        expect(sorted.data).toBe(1); // Head
        expect(sorted.next.data).toBe(5); // Second Node
        expect(sorted.next.next.data).toBe(9); // Third Node
        expect(sorted.next.next.next.data).toBe(22); // Fourth Node
        expect(sorted.next.next.next.next.data).toBe(26); // Fifth Node 
        expect(sorted.next.next.next.next.next.data).toBe(41); // Sixth Node
        expect(sorted.next.next.next.next.next.next.data).toBe(54); // Seventh Node
        expect(sorted.next.next.next.next.next.next.next.data).toBe(77); // Eighth Node
        expect(sorted.next.next.next.next.next.next.next.next.data).toBe(88); // Ninth Node
        expect(sorted.next.next.next.next.next.next.next.next.next.data).toBe(100); // Tenth Node
    });

    it("Should reverse the list", () => {
        for (let i = 0; i < 10; i++) {
            linkedList.push(i);
        }
        expect(linkedList.head.data).toEqual(0);
        expect(linkedList.getSize()).toEqual(10);
        expect(linkedList.getTail().data).toBe(9);
        expect(linkedList.convertToString(linkedList.head)).toEqual("0 1 2 3 4 5 6 7 8 9");

        linkedList.reverse();
        expect(linkedList.head.data).toEqual(9);
        expect(linkedList.getSize()).toEqual(10);
        expect(linkedList.getTail().data).toBe(0);
        expect(linkedList.convertToString(linkedList.head)).toEqual("9 8 7 6 5 4 3 2 1 0");
    });
    
    it("Should move the last element to the front", () => {
        linkedList.fillList(1, 2, 3, 4);
        const temp = linkedList.moveTailToFront(linkedList.head);
        expect(temp.head.data).toBe(4);
        expect(temp.head.next.data).toBe(1);

    });

    it("Should move the first element to the back", () => {
        linkedList.fillList(1, 2, 3, 4);
        linkedList.moveHeadToLast(linkedList.head);
        expect(linkedList.head.data).toBe(2);
        expect(linkedList.head.next.data).toBe(3);
        expect(linkedList.head.next.next.data).toBe(4);
        expect(linkedList.head.next.next.next.data).toBe(1);
    });

    it("Should insert a new node after a specified value", () => {
        linkedList.fillList(1, 2, 3);
        linkedList.insertAfter(24, 2);

        expect(linkedList.head.next.next.data).toBe(24);
        expect(linkedList.convertToString()).toBe('1 2 24 3');
        expect(linkedList.getAt(2).data).toBe(24);
        expect(linkedList.size).toBe(4);
    });

    it("Should insert a new node before a specified value", () => {
        linkedList.fillList(1, 2, 3);
        linkedList.insertBefore(24, 2);

        expect(linkedList.head.next.data).toBe(24);
        expect(linkedList.convertToString()).toBe('1 24 2 3');
        expect(linkedList.getAt(1).data).toBe(24);
        expect(linkedList.size).toBe(4);
    });

    it("Should remove a node containing a specified value", () => {
        linkedList.fillList(1, 2, 3, 4);
        linkedList.removeTargetElement(3); // 1, 2, 4

        expect(linkedList.head.next.data).toBe(2);
        expect(linkedList.head.next.next.data).toBe(4);
        expect(linkedList.convertToString()).toBe('1 2 4');
        expect(linkedList.getAt(2).data).toBe(4);
        expect(linkedList.size).toBe(3);
    });

    it("Should add a node containing an object with multiple properties", () => {
        linkedList.push({
            name: 'Tanner',
            age: 25,
            door: 'closed',
            happy: true,
            team: 'Packers'
        });
        expect(linkedList.head.data).toEqual({name: 'Tanner', age: 25, door: 'closed', happy: true, team: 'Packers' });
        expect(linkedList.size).toBe(1);
        expect(linkedList.head.data.age).toBe(25);
        expect(linkedList.getHead().data.name).toBe('Tanner');
    });

    it("Should create a list containing several nodes holding objects", () => {
        linkedList.fillList(
            {city: 'Boston', zip: 20155, country: 'U.S.'},
            {city: 'Milwaukee', zip: 23411, country: 'U.S.'},
            {city: 'Paris', zip: 20155, country: 'France'},
            {city: 'LA', zip: 66666, country: 'U.S.'},
        );
        expect(linkedList.head.data).toEqual({city: 'Boston', zip: 20155, country: 'U.S.'});
        expect(linkedList.size).toBe(4);
        expect(linkedList.getAt(3).data).toEqual({city: 'LA', zip: 66666, country: 'U.S.'});
        expect(linkedList.getAt(2).data.zip).toEqual(20155);
    });

    it("Should convert a list of data into an array containing each element in the list", () => {
        linkedList.fillList(1, 2, 3, 4, 5
            // {city: 'Boston', zip: 20155, country: 'U.S.'},
            // {city: 'Milwaukee', zip: 23411, country: 'U.S.'},
            // {city: 'Paris', zip: 20155, country: 'France'},
            // {city: 'LA', zip: 66666, country: 'U.S.'},
        );
        let array = linkedList.convertToArray();
        expect(array[0]).toEqual(1);
        expect(array[1]).toEqual(2);
        expect(array[2]).toEqual(3);
        expect(array[3]).toEqual(4);
        expect(array[4]).toEqual(5);
        expect(array.toString()).toEqual('1,2,3,4,5');
    });
});




