function calcSumLoop(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;         
    }  
    return sum;
}
console.log(calcSumLoop(100));


function calcSumRecursion(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + calcSumRecursion(n - 1);
    }
}
console.log(calcSumRecursion(100));



