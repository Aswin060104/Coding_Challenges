"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var max = 0;
var count = 1;
var start = 0;
var end = 0;
var arraySize;
var readline = require("readline");
var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r.question("Enter array size : ", function (size) {
    arraySize = Number(size);
    r.question("Enter array elements : ", function (elements) {
        var stringArray = elements.split(" ");
        var numberArray = [];
        for (var _i = 0, stringArray_1 = stringArray; _i < stringArray_1.length; _i++) {
            var tem = stringArray_1[_i];
            numberArray.push(Number(tem));
        }
        for (var index = 0; index < numberArray.length; index++) {
            if (numberArray[index] < numberArray[index + 1])
                count++;
            else {
                if (count > max) {
                    max = count;
                    start = index + 1 - count;
                    end = index + 1;
                }
                count = 1;
            }
        }
        console.log("The Maximum value is : ", max);
        console.log(numberArray.slice(start, end));
    });
});
