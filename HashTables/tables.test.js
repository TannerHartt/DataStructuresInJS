import { describe, it, expect, beforeEach, afterEach } from "vitest";
import HashTable from "./tables";

describe("Hash Tables", () => {
    let table;

    beforeEach(() => {
        table = new HashTable();
    });

    afterEach(() => { 
        table.clear();
    });

    it("Should create an empty hash table of size 7", () => {
        table = new HashTable(7);
        expect(table.size).toBe(7);
    });
});