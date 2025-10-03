function fibRecursion(n) {
    if (n === 0)
        return 0;

    if (n === 1)
        return 1;

    return fibRecursion(n - 1) + fibRecursion(n - 2);
}

function printFibRecursion(n) {
    for (let i = 0; i <= n; i++) {
        console.log(fibRecursion(i))
    }
}


printFibRecursion(6)



