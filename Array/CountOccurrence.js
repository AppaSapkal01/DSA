//Problem: Find the number of times a target element appears in a sorted array.

import { firstOccurrence } from "./FirstOccurrence.js";
import { lastOccurrence } from "./LastOccurrence.js";

const arr = [1, 2, 2, 2, 3, 4]
let target = 2;

function countOccurrenceSol1(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}

console.log('Brute force approach', countOccurrenceSol1(arr, target));

function countOccurrenceSol2(arr, target) {
    let firstIdx = firstOccurrence(arr, target);
    let lastIdx = lastOccurrence(arr, target);

    if (firstIdx === -1 || lastIdx === -1) {
        return 0;
    }
    return lastIdx - firstIdx + 1;
}

console.log('Using Binary search', countOccurrenceSol2(arr, target))