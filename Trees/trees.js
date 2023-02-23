export class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

export default class Tree { 
    constructor(data = null) {
        if (data !== null) {
            const node = new Node(data);
            this.root = node;
            this.size = 1;
        } else {
            this.root = null;
            this.size = 0;
        }
        
    }

  
    // Get root of tree
    getRoot() { return this.root; }

    // Get size of tree
    getSize() { return this.size; }

    // Clear tree
    clear() {
        this.root = null;
        this.size = 0;
    }

    // Insert node into tree
    insert(data) { 
        const node = new Node(data);
        if (this.root === null) {
            this.size++;
            return this.root = node;
        }
        let temp = this.root;
        while(true) {
            if (node.data === temp.data) return null;
            if (node.data < temp.data) {
                if (temp.left === null) {
                    temp.left = node;
                    this.size++;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = node;
                    this.size++;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    // Returns true if list contains the value, false if not
    contains(data) { 
        if (this.root === null) return false;
        let temp = this.root;
        while (temp !== null) {
            if (data < temp.data) temp = temp.left;
            else if (data > temp.data) temp = temp.right;
            else return true;
        }
        return false;
    }

    // Remove node from tree
    remove(data) {

    }

    // Returns the smallest value in the tree
    minimumValue(currentNode) {
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }

    // Returns the highest value in the tree
    maximumValue(currentNode) {
        while (currentNode.right !== null) {
            currentNode = currentNode.right;
        }
        return currentNode;
    }

    // Checks if a list is empty - returns a boolean
    isEmpty() {
        return this.root === null;
    }

    // Searches the tree left to right and places the values in an array, returns array containing entire tree in order.
    breadthFirstSearch() {
        let current = this.root;
        let queue = [];
        let results = [];
        queue.push(current);

        while(queue.length) {
            current = queue.shift();
            results.push(current.data);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return results;
    }

    
    DFSPreOrder() {
        let results = [];

        function traverse(currentNode) {
            results.push(currentNode.data);
            if (currentNode.left) return traverse(currentNode.left);
            if (currentNode.right) return traverse(currentNode.right);
        }
        traverse(this.root);
        return results;
    }

    DFSPostOrder() {
        let results = [];

        function traverse(currentNode) {
            if (currentNode.left) return traverse(currentNode.left);
            if (currentNode.right) return traverse(currentNode.right);
            results.push(currentNode.data);
        }

        traverse(this.root);
        return results;
    }

    DFSInOrder() {
        let results = [];

        function traverse(currentNode) {
            if (currentNode.left) return traverse(currentNode.left);
            results.push(currentNode.data);
            if (currentNode.right) return traverse(currentNode.right);
        }

        traverse(this.root);
        return results;
    }
}
