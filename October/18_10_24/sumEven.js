var input = require('prompt-sync')();
var str = input("Enter a array : ");
var numberArray = str.split(' ').map(Number);
function calculateEvenSum(numberArray) {
    var sum = 0;
    for (var _i = 0, numberArray_1 = numberArray; _i < numberArray_1.length; _i++) {
        var i = numberArray_1[_i];
        if (i % 2 == 0)
            sum += i;
    }
    return sum;
}
console.log(calculateEvenSum(numberArray));
