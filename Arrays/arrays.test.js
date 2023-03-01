import { describe, expect, it, beforeEach, afterEach } from 'vitest';
import { mergeSort, binarySearchInArray, insertionSort, insertionSort2, bubbleSort, selectionSort, quickSort, radixSort } from './arrays';

describe.only("Arrays", () => {
    let array;

    beforeEach(() => {
        array = [];
    });

    afterEach(() => {
        array = [];
    });

    it("Should sort an array using merge sort method", () => {
        array = [1, 4, 2, 7, 5, 9, 3, 10];

        let sorted = mergeSort(array);

        expect(sorted.length).toBe(8);
        expect(sorted).toEqual([1,2,3,4,5,7,9,10]);
    });

    it("Should sort an array using quick sort method", () => {
        array = [1, 4, 2, 7, 5, 9, 3, 10];

        let sorted = quickSort(array);

        expect(sorted.length).toBe(8);
        expect(sorted).toEqual([1,2,3,4,5,7,9,10]);
    });

    it("Should sort an array using radix sort method", () => {
        array = [1, 4, 2, 7, 5, 9, 3, 10];

        let sorted = radixSort(array);

        expect(sorted.length).toBe(8);
        expect(sorted).toEqual([1,2,3,4,5,7,9,10]);

        array = [15554, 1353, 562, 3734, 2346, 3, 66, 123, 0];

        sorted = radixSort(array);
        expect(sorted.length).toBe(9);
        expect(sorted).toEqual([0,3,66,123,562,1353,2346,3734,15554]);
    });
});