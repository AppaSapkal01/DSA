// Q: Problem: Given a sorted array, find the last occurrence of a target element.

const arr = [2, 4, 10, 10, 10, 10];

let target = 10;

const ans = lastOccurrence(arr, target);
// console.log(ans);

export function lastOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    let ans = -1;

    while(left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if(arr[mid] === target) {
            ans = mid;
            left = mid + 1;
        } else if (arr[mid] > target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
}

