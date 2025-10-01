function findDuplicateInArray(nums) {
    let ansArr = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                ansArr.push(nums[i]);
                continue;
            }
        }
    }

    return ansArr;
}

const ans = findDuplicateInArray([1, 2, 2, 1, 7, 8, 3, 5, 5])

console.log(ans)