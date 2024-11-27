// Q: Given a sorted array of integers and a target value, find the indices of two numbers such that their sum equals the target. Return the indices as a pair.

const arr = [20, 40, 70, 80, 90, 120, 240];
const target = 190;

//Time Complexity = O(n^2)
// Brute force approach
const findTargetSol1 = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]
            }
        }
    }
}
console.log('using brute force approach', findTargetSol1(arr, target));

// Time Complexity = O(nlog(n))
// Binary Search Approach
const findTargetSol2 = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        let left = i + 1;
        let right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (arr[i] + arr[mid] === target) {
                return [i, mid]
            } else if (target > arr[i] + arr[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1
            }
        }
    }
}
console.log('using binary search', findTargetSol2(arr, target))

// Time Complexity = O(n)
// This is Two Pointer Approach
const findTargetSol3 = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        if (arr[left] + arr[right] === target) {
            return [left, right];
        } else if (arr[left] + arr[right] > target) {
            right -= 1;
        } else {
            left += 1;
        }
    }
};

console.log('using two pointer approach', findTargetSol3(arr, target))

