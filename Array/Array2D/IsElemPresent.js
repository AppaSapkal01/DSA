// if given 2d array is sorted, and you have to find element is present or not

const arr2d = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
]

let target = 60;

console.log(isElemPresent(arr2d, target));

// Time Complexity = O(log(m*n  ))
function isElemPresent(arr2d, target) {
    let m = arr2d.length;

    if (m === 0) return false;

    let n = arr2d[0].length;

    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        let row = Math.floor(mid / n);
        let col = (mid % n);

        let midElem = arr2d[row][col];

        if (midElem === target) {
            return true;
        } else if (target > midElem) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}