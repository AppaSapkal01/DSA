function sumOfN(n) {
    if(n === 1)
        return n;

    return n + sumOfN(n - 1);
}

const ans = sumOfN(10);

console.log(ans)