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
function checkPerfectNumber(num: number): boolean {
    var tot : number = 0;
    for(var i : number = 1; i <= num/2; i++){
        if( num % i == 0)
            tot += i;
    }
    return tot == num ? true : false;
};