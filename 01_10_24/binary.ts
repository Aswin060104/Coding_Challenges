/*
67. Add Binary
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

*/
function addBinary(x: string, y: string): string {
    var a : number = 0;
    var b : number = 0;
    var carry : number = 0;

    var sum : number = 0;

    var result : string = "";
    var i : number = x.length - 1;
    var j : number = y.length - 1;
    while( i > -1 || j > -1){
        a = parseInt(x[i--] ?? "0");
        b = parseInt(y[j--] ?? "0");
        sum = a + b + carry;
        carry = ( sum > 1) ? 1 : 0;
        result = ((sum % 2 == 1) ? "1" : "0") + result;
    }
    return carry == 1 ? "1" + result : result;
}