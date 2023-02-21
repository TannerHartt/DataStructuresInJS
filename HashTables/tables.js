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
    set(key, value) {
        let index = this._hash(key);
        if (!this.dataMap[index]) this.dataMap[index] = [];
        this.dataMap[index].push([key, value]);
        return this;
    }

    // O(1)
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

    keys() {
        let allKeys = [];
        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    allKeys.push(this.dataMap[i][j][0]);
                }       
            }
        }
        return allKeys;
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