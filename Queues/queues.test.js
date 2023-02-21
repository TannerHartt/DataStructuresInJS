import { describe, it, expect, beforeEach, afterEach } from "vitest";
import Queue from "./queues";

describe("Queues", () => {
    let queue;

    beforeEach(() => {
        queue = new Queue();
    });

    afterEach(() => { 
        queue.clear();
    });

    it("Should create a Queue with an intial value", () => {
        queue = new Queue(1);
        expect(queue.getSize()).toBe(1);
        expect(queue.getFirst()).toBeTruthy();
        expect(queue.getFirst().data).toBe(1);
        expect(queue.getLast().data).toBe(1);
    });

    it("Should add a element to the back of the queue", () => {
        queue.enqueue(1);
        expect(queue.getSize()).toBe(1);
        expect(queue.getFirst().data).toBe(1);
        expect(queue.getLast().data).toBe(1);

        queue.enqueue(2);
        expect(queue.getSize()).toBe(2);
        expect(queue.getFirst().data).toBe(1);
        expect(queue.getLast().data).toBe(2);

        queue.enqueue(23);
        expect(queue.getSize()).toBe(3);
        expect(queue.getFirst().data).toBe(1);
        expect(queue.getLast().data).toBe(23);
    });

    it("Should remove a element from the front of the queue", () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.getSize()).toBe(3);
        expect(queue.getFirst().data).toBe(1);
        expect(queue.getLast().data).toBe(3);

        expect(queue.dequeue().data).toBe(1);
        expect(queue.getSize()).toBe(2);
        expect(queue.getFirst().data).toBe(2);
        expect(queue.getLast().data).toBe(3);
        
        expect(queue.dequeue().data).toBe(2);
        expect(queue.getSize()).toBe(1);
        expect(queue.getFirst().data).toBe(3);
        expect(queue.getLast().data).toBe(3);

        expect(queue.dequeue().data).toBe(3);
        expect(queue.getSize()).toBe(0);
        expect(queue.getFirst()).toBe(null);
        expect(queue.getLast()).toBe(null);

        expect(queue.dequeue()).toBeFalsy();
        expect(queue.dequeue()).toBe(null);
        expect(queue.getSize()).toBe(0);
        expect(queue.getFirst()).toBe(null);
        expect(queue.getLast()).toBe(null);
        
    });
});