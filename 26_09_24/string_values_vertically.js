/*
The program must accept N string values as the input. The program must print the first character of all N string values. Then, the program must print the second character of all N string values. Next, the program must print the third character of all N string values, and so on. Similarly, the program must print the remaining characters of all N string values as the output.

Boundary Condition(s):
2
≤
𝑁
≤
100
2≤N≤100
1
≤
1≤ Length of each string 
≤
1000
≤1000
Input Format:
The first line contains N.
The next N lines each contain a string value.
Output Format:
The first line contains a string value formed by printing the characters of N string values based on the given conditions.
Example Input/Output:
Input:

Copy code
4
skill
Robot
boy
TALL
Output:

Copy code
sRbTkooAibyLloLlt
*/

var readline = require('readline');

var reader = readline.createInterface({
    input: process.stdin,
    terminal: true
});

var lines = [];

reader.on('line', function (line) {
    lines.push(line);
});

reader.on('close', function () {
    // Start here
    var max = 0;

    for (var i = 1; i < lines.length; i++) {
        if (lines[i].length > max) {
            max = lines[i].length;
        }
    }

    var ans = "";

    for (var i = 0; i < max; i++) {
        for (var j = 1; j < lines.length; j++) {
            if (lines[j][i] !== undefined) {
                ans += lines[j][i];
            }
        }
    }

    console.log(ans);
});