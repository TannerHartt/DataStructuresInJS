import Stack from '../Stacks/stacks.js';

export default class GraphAdjList {
    constructor() {
        this.adjacencyList = {};
    }


    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return true;
        }
        return false;
    }

    
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return null;
        while(this.adjacencyList[vertex].length) {
            let temp = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, temp);
        }
        delete this.adjacencyList[vertex];
        return this;
    }


    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true;
        }
        return false;
    }


    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2); // Return all elements not equal to vertex 2
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1); // Return all elements not equal to vertex 1
            return true;
        }
        return false;
    }


    DFSRecursive(start) {
        if (!this.adjacencyList[start]) return null;
        let visited = {};
        let result = [];

        const DFS = (vertex) => { // Recursive function
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return DFS(neighbor);
                }
            });
        }

        DFS(start); // Kick off the recursive function
        return result;
    }

    DFSIterative(start) {
        let stack = [start];
        let result = [];
        let visited = {};
        let current;

        visited[start] = true;
        while (stack.length) {
            current = stack.pop();
            result.push(current);
            this.adjacencyList[current].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }


    // TODO: Test this function
    DFSI(start) {
        let stack = new Stack(start);
        let result = [];
        let visited = {};
        let current;

        visited[start] = true;
        while (stack.length) {
            current = stack.pop();
            result.push(current);
            this.adjacencyList[current].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }

    // TODO: Test this function
    BFS(start) {
        let queue = [start];
        let result = [];
        let visited = {};
        let current;

        visited[start] = true;
        while (queue.length) {
            current = queue.shift();
            result.push(current);
            this.adjacencyList[current].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }

    clear() {
        this.adjacencyList = {};
    }

}