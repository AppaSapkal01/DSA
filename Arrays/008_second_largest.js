function secondLargest(nums) {
    let maxEl = Number.NEGATIVE_INFINITY;
    let secondMaxEl = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > maxEl) {
            secondMaxEl = maxEl;
            maxEl = nums[i];
        } else if (nums[i] < maxEl && nums[i] > secondMaxEl) {
            secondMaxEl = nums[i]
        }
    }

    return secondMaxEl;
}

let ans = secondLargest([1, 2, 3, 9, 8, 5, 6, 10, 89, 77]);

console.log(ans)