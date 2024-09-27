"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var r3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r3.question("Enter the Number : ", function (n) {
    var range = Number(n);
    for (var i = 1; i <= range; i++) {
        if (i % 3 == 0 && i % 5 == 0)
            console.log("FizzBuzz - ", i);
        else if (i % 3 == 0)
            console.log("Fizz - ", i);
        else if (i % 5 == 0)
            console.log("Buzz - ", i);
        else
            console.log(i);
    }
});
