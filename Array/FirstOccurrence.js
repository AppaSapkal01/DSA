const arr = [1, 2, 4, 4, 4, 5, 6, 7];
const target = 4;

const ans = firstOccurrence(arr, target);
// console.log(ans);

export function firstOccurrence (arr, target) {
    let left = 0;
    let right = arr.length - 1;

    let ans = -1;
    while(left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if(arr[mid] === target) {
            ans = mid;
            right = mid - 1; 
        } else if(target > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
}

