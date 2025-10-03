function reverseNumRecursion(num, revTracked = 0) {
    if (num <= 0) {
        return revTracked;
    }

    let currLastDigit = num % 10;
    let nextNum = Math.floor(num / 10);
    let rev = revTracked * 10 + currLastDigit;

    return reverseNumRecursion(nextNum, rev)


}

const ans = reverseNumRecursion(1236);

console.log(ans)
