const arr = [20, 45, 63, 47, 55, 75, 70, 95, 41, 67];

// time complexity = O(n)
// space complexity = O(1)
const searchElem = (arr, target) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i;
        } 
    }
    return -1
};

console.log(searchElem(arr, 67))

