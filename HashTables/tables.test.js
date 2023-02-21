import { describe, it, expect, beforeEach, afterEach } from "vitest";
import HashTable from "./tables";

describe.skip("Hash Tables", () => {
    let table;

    beforeEach(() => {
        table = new HashTable();
    });

    afterEach(() => { 
        
    });

    it("Should create an empty hash table of size 7", () => {
        expect(table.size).toBe(7);
    });
});