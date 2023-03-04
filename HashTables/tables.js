export default class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
        this.size = size;
    }

    // O(1)
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;            
        }
        return hash;
    } 

    // O(1)
    // Another way to hash a key
    hash(key) {
        let total = 0;
        for (let char in key) {
            let value = char.charCodeAt(0) - 96;
            total = (total + value) % this.dataMap.length;
        }
        return total;
    }

    // O(1)
    // Sets a key-value pair in the hash table
    set(key, value) {
        let index = this._hash(key);
        if (!this.dataMap[index]) this.dataMap[index] = [];
        this.dataMap[index].push([key, value]);
        return this;
    }

    // O(1)
    // Returns the value associated with the key
    get(key) {
        let index = this._hash(key);
        if (this.dataMap[index]) {
            for (let i = 0; i < this.dataMap[index].length; i++) {
                if (this.dataMap[index][i][0] === key) {
                    return this.dataMap[i][1];
                }
            }
        }
        return null;
    }

    // Returns an array containing all keys in the hash table
    keys(unique = false) {
        let allKeys = [];
        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    if (unique) {
                        if (!allKeys.includes(this.dataMap[i][j][0])) {
                            allKeys.push(this.dataMap[i][j][0]); // If unique is true, push only unique keys
                        }
                    } else allKeys.push(this.dataMap[i][j][0]);
                }       
            }
        }
        return allKeys;
    }

    // O(n)
    // Returns an array containing all values in the hash table
    values(unique = false) {
        let allValues = [];
        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    if (unique) {
                        if (!allValues.includes(this.dataMap[i][j][1])) {
                            allValues.push(this.dataMap[i][j][1]); // If unique is true, push only unique values
                        }
                    } else allValues.push(this.dataMap[i][j][1]); // If unique is false, push all values
                }       
            }
        }
        return allValues;
    }


    clear() {
        this.dataMap = new Array(this.size);
    }
}


// Additional utility function to check if two arrays share a value
export function itemInCommon(arr1, arr2) {
    let obj = {};
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = true;
    }
    for (let i = 0; i < arr2.length; i++) {
        if (obj[arr2[j]]) return true;
    }
    return false;
}