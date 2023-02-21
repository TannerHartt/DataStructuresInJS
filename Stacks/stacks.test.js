import { describe, it, expect, beforeEach, afterEach } from "vitest";
import Stack from "./stacks";

describe("Stacks", () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    afterEach(() => { 
        stack.clear();
    });

    it("Should create an empty stack", () => {
       stack = new Stack();

       expect(stack.getSize()).toBe(0);
       expect(stack.getTop()).toBeNull();
    });

    it("Should push a node element on to the stack", () => {
        stack.push(1)
        stack.push(2)
        stack.push(3)
 
        expect(stack.getSize()).toBe(3);
        expect(stack.getTop()).toBeTruthy();
        expect(stack.getTop().data).toBe(3);
    });

    it("Should pop an element off the top and return it", () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
 
        // Before Operations
        expect(stack.getSize()).toBe(3);
        expect(stack.getTop()).toBeTruthy();
        expect(stack.getTop().data).toBe(3);

        expect(stack.pop().data).toBe(3);
        expect(stack.getSize()).toBe(2);
        expect(stack.getTop().data).toBe(2);

        expect(stack.pop().data).toBe(2);
        expect(stack.getSize()).toBe(1);
        expect(stack.getTop().data).toBe(1);

        expect(stack.pop().data).toBe(1);
        expect(stack.getSize()).toBe(0);
        expect(stack.getTop()).toBeNull();

    });


});