function missingNumber(nums) {
    let n = nums.length;
    let sumArr = nums.reduce((acc, curr) => acc + curr, 0);
    let sumOfN = n * (n + 1) / 2;

    return sumOfN - sumArr;
}

const ans = missingNumber([3, 0, 1, 2, 4]);

console.log(ans)