const arr = [11, 23, 35, 42, 51, 67, 71, 84, 95];

const binarySearchElem = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if(arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1
        }
    }
    return -1;
}
// console.log(binarySearchElem(arr, 0, arr.length - 1, 23));

const searchUsingRecursion = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if(arr[mid] === target) {
            return mid;
        } else if(arr[mid] < target) {
            return searchUsingRecursion(arr, mid + 1, right, target);
        } else {
            return searchUsingRecursion(arr, left, mid - 1, target);
        }
    }
    return - 1;
}
console.log(searchUsingRecursion(arr, 0, arr.length - 1, 23));

