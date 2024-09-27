/* 
The program must accept two string values S1 and S2 as the input. The string S2 is formed by concatenating the string S1 repeatedly (possible once) but exactly only one character is missing in S2. The program must print the missing character in S2 as the output. Boundary Condition(s): 2 <= Length of S1 <= 100 1 <= Length of S2 <= 1000 Input Format: The first line contains S1. The second line contains S2. Output Format: The first line contains the missing character in S2. Example Input/Output 1: Input: ant antantantanantantant Output: t
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
    var strings = lines[0].split(" ");
    var a = lines[0];
    var b = lines[1];
    var f = 0;
    for(var i = 0; i < b.length; i++){
        if(b[i] != a[i%a.length]){
            console.log(a[i%a.length]);
            f = 1;
            break;
        }
    }
    if(f == 0)
    console.log(a[a.length-1]);
    // Start here
});