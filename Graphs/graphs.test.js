import { describe, it, expect, beforeEach, afterEach } from "vitest";
import GraphAdjList from "./graphs";

describe("Graphs", () => {
    let graph;

    beforeEach(() => {
        graph = new GraphAdjList();
    });

    afterEach(() => { 
        graph.clear();
    });

    it("Should create an empty graph", () => {
        expect(graph.adjacencyList).toEqual({});
    });

    it("Should add a vertex", () => {
        expect(graph.addVertex('A')).toBeTruthy();
        expect(graph.addVertex('A')).toBeFalsy(); // Cant have duplicates
        expect(graph.adjacencyList).toEqual({ A: []});
    });
});``