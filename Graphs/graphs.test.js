import { describe, it, expect, beforeEach, afterEach } from "vitest";
import Graph from "./graphs";

describe("Graphs", () => {
    let graph;

    beforeEach(() => {
        graph = new Graph();
    });

    afterEach(() => { 
        
    });

    it("Should create an empty graph", () => {
        expect(graph.adjacencyList).toEqual({});
    });

    it("Should add a vertex", () => {
        expect(graph.addVertex('A')).toBeTruthy();
        expect(graph.addVertex('A')).toBeFalsy(); // Cant have duplicates
        expect(graph.adjacencyList).toEqual({ A: []});
    });
});