var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  terminal: true
});

var lines = [];

reader.on('line', function (str) {
    lines.push(str);
});

reader.on('close', function () {
    // Start here
    var s = lines[0];
    var end = s.length;
    var subString = "";
    var ans = "";
    var edge = 1;
    for(var i = 0; i<s.length; i++){
        for(var j = end; j > i && j-i != 1; j--){
            subString = s.slice(i,j);
            if(subString.length%2!=0)
                continue;
            var check1 = subString[0];
            var half = subString.length/2;
            var check2 = subString[half];
            var f = 0;
            if(check1 == check2)
                f = 1;
            for(var x = 1; x < half && f!=1; x++){
                if( subString[x]!=check1 || subString[x+half] != check2){
                    f = 1;
                    break;
                }
            }
            if(f == 0 && ans.length < subString.length){
                ans = subString;
                edge = 0;
            }
        }
    }
    if(edge == 1)
    console.log(-1);
    else
    console.log(ans);
});

/*
The program must accept a string S containing only 0s and 1s as the input. The program must print the longest substring of S based on the following conditions:

The number of 0s must be equal to the number of 1s in the substring.
All 1s must be present in the first half or the second half of the substring.
If two or more such longest substrings are present in S, the program must print the first occurring substring as the output. If there is no such substring, the program must print -1 as the output.

Boundary Condition(s):
1
≤
1≤ Length of S 
≤
1000
≤1000
Input Format:
The first line contains S.
Output Format:
The first line contains the substring of S as per the given conditions or -1.
Example Input/Output:

Input:
011011000

Output:
1100
Explanation:

The given string is 011011000.
The longest substring with equal 1s and 0s where all the 1s are present in the first half is 1100.
So, 1100 is printed as the output.*/