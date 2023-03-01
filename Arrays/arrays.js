// Function to find the index of an element in an array using binary search
export function binarySearchInArray(array, target, start = 0, end = array.length - 1) {
    if (start > end) return "Target not found";
    const middle = Math.floor((start + end) / 2);
    if (array[middle] === target) return `Target found at index ${middle}`;
    if (array[middle] > target) return findInArray(array, target, start, middle - 1);
    if (array[middle] < target) return findInArray(array, target, middle + 1, end);
}


/**
 * An iterative approach to the binary search algorithm for arrays, only works on sorted arrays
 * @param {*} arr Array to be searched through for the target
 * @param {*} target The value to search for in the array
 * @returns The index of the target in the array, or -1 if the target is not found
 */
export function binarySearchIterative(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== target && start <= end) {
        if (target < arr[middle]) end = middle - 1; 
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    // If the element at middle index is === target, return the index else return -1
    return arr[middle] === target ? middle : -1;
}


// Function to sort an array using merge sort recursively
export function mergeSort(array) {
    if (array.length === 1) return array; // Base case
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}


// Function to merge two sorted arrays
function merge(array1, array2) {
    let combined = [];
    let i = 0, j = 0;

    while (i < array1.length && array2.length) {
        if (array1[i] < array2[j]) {
            combined.push(array1[i]);
            i++;
        } else {
            combined.push(array2[j]);
            j++;
        }
    }

    while (i < array1.length) {
        combined.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        combined.push(array2[j]);
        j++;
    }
    return combined;
}
  

// Recursive function to sort an array using quick sort
// O(n log n) time complexity - good!
export function quickSort(array, lowIndex = 0, highIndex = array.length -1) {
    if (lowIndex >= highIndex) return;

    let pivotIndex = Math.ceil(Math.random(highIndex - lowIndex) + lowIndex);
    let pivot = array[pivotIndex];
    swap(array, pivotIndex, highIndex);

    let leftPointer = lowIndex;
    let rightPointer = highIndex;

    while(leftPointer < rightPointer) {
        while(array[leftPointer] < pivot && leftPointer < rightPointer) {
        leftPointer++;
        }
        while(array[rightPointer] >= pivot && leftPointer < rightPointer) {
        rightPointer--;
        }
        swap(array, leftPointer, rightPointer);
    }

    swap(array, leftPointer, highIndex);
    quickSort(array, lowIndex, leftPointer - 1);
    quickSort(array, leftPointer + 1, highIndex);
    return array;
}


// Utility function to swap two elements in an array
function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}


// Utility function to move all elements less than the pivot to left and all elements greater than the pivot to the right
function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
    let swapIndex = pivotIndex;
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
            swapIndex++;
            swap(array, swapIndex, i);
        }
    }
    swap(array, pivotIndex, swapIndex);
    return swapIndex;
}


// Recursive function to sort an array using quick sort with a different implementation
export function quickSortUsingPivot(array, left = 0, right = array.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(array, left, right);
        quickSortUsingPivot(array, left, pivotIndex - 1);
        quickSortUsingPivot(array, pivotIndex + 1, right);
    }
    return array;
}


// Function to sort an array using insertion sort
// O(n^2) time complexity - bad!
export function insertionSort(array) {
    let current;
    for (let i = 1; i < array.length; i++) {
        current = array[i];

        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
}

// Insertion sort function for arrays with slightly different implementation
export function insertionSort2(array) {
    let temp;
    for (let i = 1; i < array.length; i++) {
        temp = array[i];
        for (var j = 1 - 1; array[j] > temp && j > -1; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }
    return array;
}

// O(n^2) time complexity - horrible!
// Function to sort an array using bubble sort
export function bubbleSort(array) {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// Function to sort an array using selection sort
export function selectionSort(array) {
    let min;
    for (let i = 0; i < array.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) min = j;
        }
        if (i !== min) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}


// Function to sort an array of numbers using radix sort
export function radixSort(array) {
    let max = Math.max(...array);
    let maxDigits = max.toString().length;
    let buckets = Array.from({length: 10}, () => []);
    for (let i = 0; i < maxDigits; i++) {
        for (let j = 0; j < array.length; j++) {
            let digit = getDigit(array[j], i);
            buckets[digit].push(array[j]);
        }
        array = [].concat(...buckets);
        buckets = Array.from({length: 10}, () => []);
    }
    return array;
}

// Radix sort helper function to get the digit at a given position
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}