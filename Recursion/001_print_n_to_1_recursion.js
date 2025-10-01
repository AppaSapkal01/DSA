function printNToOne(n) {
    if(n === 0) 
        return;

    console.log(n);
    n--;
    printNToOne(n)
};

printNToOne(10)