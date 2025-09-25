function removeDuplicates(nums) {
    // Method 1
    // let temp = [nums[0]];

    // for(let i = 1; i < nums.length; i++) {
    //     if(!helperCheckEl(temp, nums[i])) {
    //         temp.push(nums[i]);
    //     }
    // }

    // return temp;

    // Method 2
    const tempSet = new Set(nums);
    const uniqueArr = Array.from(tempSet);

    return uniqueArr
}

function helperCheckEl(arr, find) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === find) {
            return true;
        }
    }

    return false;
}

let ansArr = removeDuplicates([1, 2, 3, 2, 3, 3, 4, 8, 1]);

console.log(ansArr)

