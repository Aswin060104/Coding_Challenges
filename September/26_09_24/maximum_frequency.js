/*The program must accept N digits as the input. The program must print the digit with the maximum frequency among the N digits as the output. If two or more digits have the same maximum frequency, the program must print the first repeating digit (the digit occurring for the second time first in the input order) among those digits as the output.

Note: At least one digit is always repeated among the N digits.

Boundary Condition(s)
2
≤
𝑁
≤
1000
2≤N≤1000
Input Format:
The first line contains N.
The second line contains N digits separated by a space.
Output Format:
The first line contains a digit as per the given condition(s).
Example Input/Output:
Input:

Copy code
9
1 2 3 4 4 4 5 1 4
Output:

Copy code
4
Explanation:

The frequency of digit 1 is 2.
The frequency of digit 2 is 1.
The frequency of digit 3 is 1.
The frequency of digit 4 is 4.
The frequency of digit 5 is 1.
The digit 4 has the maximum frequency, so 4 is printed as the output.

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
    var string = lines[1];
    var arString = string.split(" ");
    var ar = [];

    for (var i of arString) {
        ar.push(Number(i));
    }

    var count = [];
    var max = 0;
    var map = new Map();
    var second = [];
    var ans = null;

    for (var i of ar) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1);
        }

        if (map.get(i) > max) {
            max = map.get(i);
            ans = i;
        }

        if (map.get(i) == 2) {
            second.push(i);
        }
    }

    if (max > 2) {
        for (var i of second) {
            if (map.get(i) == max) {
                ans = i;
                break;
            }
        }
    }

    console.log(ans);
});
