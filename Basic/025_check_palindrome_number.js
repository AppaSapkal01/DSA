function isPalindromeNumber(num) {
    let tempNum = num;
    let palinNum = 0;

    while(tempNum > 0) {
        let digit = tempNum % 10;
        palinNum = palinNum * 10 + digit;
        tempNum = Math.floor(tempNum / 10);
    }

    const ans = palinNum === num ? true : false;
    console.log(ans ? `${num} is palindrome number` : `${num} is not palindrome number`)
};

isPalindromeNumber(12321)