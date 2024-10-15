/*
507. Perfect Number
A perfect number is a positive integer that is equal to the sum of its positive divisors,
excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

Given an integer n, return true if n is a perfect number, otherwise return false.

Example 1:

Input: num = 28
Output: true
Explanation: 28 = 1 + 2 + 4 + 7 + 14
1, 2, 4, 7, and 14 are all divisors of 28.

*/
function checkPerfectNumber(num) {
    var tot = 0;
    for (var i = 1; i <= num / 2; i++) {
        if (num % i == 0)
            tot += i;
    }
    return tot == num ? true : false;
}
;
// var n : number = 10;
// if( n % 2 == 0)
//     console.log("Even");
// else
//     console.log("Odd");
var arr = [5, 6, 7, 8]; // 0 1 2 3  length : 4
//console.log(arr[2]);
// console.log(arr.length);
// for(var i : number = 0;)
var i = 0;
while (i < 5) {
    console.log(i); // 0 1 2 3 4
    i++; // 1 2 3 4 5
}
