"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var c = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
c.question("Enter a and b : ", function (values) {
    console.log(values.split(" "));
    var a = Number((values.split(" "))[0]);
    var b = Number((values.split(" "))[1]);
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("Values of a and b are ", a, b);
});
