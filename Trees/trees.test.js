import { describe, it, expect, beforeEach, afterEach } from "vitest";
import Tree from "./trees";

describe.skip("Trees", () => {
    let tree;

    beforeEach(() => {
        tree = new Tree();
    });

    afterEach(() => { 
        tree.clear();
    });

    it("Should create an empty tree", () => {
        tree = new Tree();
        expect(tree.getSize()).toBe(0);
        expect(tree.getRoot()).toBeFalsy();
        expect(tree.isEmpty()).toBeTruthy();
    });

    it("Should create a tree with an intial root", () => {
        tree = new Tree(5);
        expect(tree.getSize()).toBe(1);
        expect(tree.getRoot().data).toBe(5);
        expect(tree.isEmpty()).toBeFalsy();
    });
    
    it("Should insert a node into an empty tree", () => {
        tree.insert(47);
        expect(tree.getSize()).toBe(1);
        expect(tree.getRoot().data).toBe(47);
        expect(tree.isEmpty()).toBeFalsy();
    });

    it("Should insert mulitple nodes into a tree", () => {
        tree.insert(47);
        tree.insert(12);
        tree.insert(64);
        tree.insert(33);
        expect(tree.getSize()).toBe(4);
        expect(tree.getRoot().data).toBe(47);
        expect(tree.isEmpty()).toBeFalsy();
        expect(tree.getRoot().left.data).toBe(12);
        expect(tree.getRoot().left.right.data).toBe(33);
        expect(tree.getRoot().right.data).toBe(64);
        expect(tree.getRoot().right.left).toBeFalsy();
        expect(tree.getRoot().right.right).toBeFalsy();
    });

    it("Should return true if the tree contains an element, false if not", () => {
        tree.insert(47);
        tree.insert(12);
        tree.insert(15);
        tree.insert(11);
        tree.insert(58);
        tree.insert(72);
        expect(tree.getSize()).toBe(6);
        expect(tree.getRoot().data).toBe(47);
        expect(tree.isEmpty()).toBeFalsy();

        expect(tree.contains(11)).toBeTruthy();
        expect(tree.contains(15)).toBeTruthy();
        expect(tree.contains(47)).toBeTruthy();
        expect(tree.contains(58)).toBeTruthy();
        expect(tree.contains(72)).toBeTruthy();
        expect(tree.contains(74)).toBeFalsy();
        expect(tree.contains(100)).toBeFalsy();
    });

    it("Should return the smallest value in the tree", () => {
        tree.insert(47);
        tree.insert(12);
        tree.insert(15);
        tree.insert(11);
        tree.insert(58);

        expect(tree.getSize()).toBe(5);
        expect(tree.getRoot().data).toBe(47);
        expect(tree.minimumValue(tree.getRoot()).data).toBe(11);
        expect(tree.minimumValue(tree.getRoot().left).data).toBe(11);
        expect(tree.minimumValue(tree.getRoot().right).data).toBe(58);        
    });

    
    it("Should create and populate a tree, search it and return an array of the values using BFS", () => {
        tree.insert(47);
        tree.insert(21);
        tree.insert(76);
        tree.insert(18);
        tree.insert(52);
        tree.insert(27);
        tree.insert(82);

        expect(tree.breadthFirstSearch()).toEqual([47, 21, 76, 18, 27, 52, 82]);
        expect(tree.root.data).toBe(47);
    });

    it("Should create and populate a tree, search it and return an array of the values using DFS", () => {
        tree.insert(47);
        tree.insert(21);
        tree.insert(76);
        tree.insert(18);
        tree.insert(52);
        tree.insert(27);
        tree.insert(82);

        expect(tree.depthFirstSearchPreOrder()).toEqual([47, 21, 76, 18, 27, 52, 82]);
        expect(tree.root.data).toBe(47);
    });
});