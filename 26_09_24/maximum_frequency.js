// The program must accept N digits as the input. The program must print the digit with the maximum frequency among the N digits as the output. If two or more digits have the same maximum frequency, the program must print the first repeating digit(the digit occuring for the second time first in the input order) among those digits as the output. Note: At least one digit is always repeated among the N digits. Boundary Condition(s) 2 <= N <= 1000 Input Format: The first line contains N. The second line contains N digits separated by a space. Output Format: The first line contains a digit as per the given condition(s). Example Input/Output 1: Input: 9 1 2 3 4 4 4 5 1 4 Output: 4 Explanation: The frequency of digit 1 is 2. The frequency of digit 2 is 1. The frequency of digit 3 is 1. The frequency of digit 4 is 4. The frequency of digit 5 is 1. The digit 4 has the maximum frequency, so 4 is printed as the output.
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
    var string = lines[1];
    var arString = string.split(" ");
    var ar = [];
    for(var i of arString){
        ar.push(Number(i));
    }
    var count = [];
    var max = 0;
    for(var i of ar){
        if(count[ar.indexOf(i)] == undefined)
            count[ar.indexOf(i)] = 1;
        else
            count[ar.indexOf(i)] += 1;
        if( count[ar.indexOf(i)] > max){
            max = count[ar.indexOf(i)];
            ans = i;
        }
    }
    console.log(ans);
});