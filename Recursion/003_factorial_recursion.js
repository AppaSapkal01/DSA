function factorialRecursion(num) {
    if(num === 1) {
        return num;
    }

    return num * factorialRecursion(num - 1);
}

const ans = factorialRecursion(4)

console.log(ans)

