function swapNum(num1, num2) {
    console.log(`before swap, num1: ${num1}, num2: ${num2}`)

    num1 += num2;
    num2 = num1 - num2;
    num1 -= num2;

    console.log(`after swap, num1: ${num1}, num2: ${num2}`)
}

swapNum(5, 4)
swapNum(89, 11)
swapNum(47, 39)