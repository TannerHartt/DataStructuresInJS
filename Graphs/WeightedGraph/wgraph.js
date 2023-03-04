import GraphAdjList from "./graphs";
import PriorityQueue from "../PriorityQueue/pqueue";

export default class WeightedGraph extends GraphAdjList {
    constructor() {
        super();
    }


    addVertex(vertex) {
        super.addVertex(vertex);
    }

    
    addEdge(vertex1, vertex2, weight) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push({node: vertex2, weight});
            this.adjacencyList[vertex2].push({node: vertex1, weight});
            return true;
        }
        return false;
    }
    
    // removeVertex(vertex) {
    //     if (!this.adjacencyList[vertex]) return null;
    //     while(this.adjacencyList[vertex].length) {
    //         let temp = this.adjacencyList[vertex].pop();
    //         this.removeEdge(vertex, temp);
    //     }
    //     delete this.adjacencyList[vertex];
    //     return this;
    // }


    // removeEdge(vertex1, vertex2) {
    //     if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
    //         this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2); // Return all elements not equal to vertex 2
    //         this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1); // Return all elements not equal to vertex 1
    //         return true;
    //     }
    //     return false;
    // }

    dikstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = []; // To return at end
        let smallest;
        
        // Build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null;
        }

        // As long as there is something to visit
        while(nodes.values.length) {
            smallest = nodes.dequeue().value;
            if (smallest === finish) {
                // We are done
                // Build up path to return at end
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest !== Infinity]) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    // Find neighoring node
                    let node = this.adjacencyList[smallest][neighbor];
                    let nextNeighbor = node.node;

                    // Calculate distance to neighor node
                    let candidate = distances[smallest] + node.weight;
                    if (candidate < distances[nextNeighbor]); {
                        // Updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;

                        // Updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;

                        // Enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        } // End of loop
        return path.concat(smallest).reverse();
    }



    clear() {
        this.adjacencyList = {};
    }

}