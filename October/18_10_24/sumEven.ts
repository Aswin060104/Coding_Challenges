let input = require('prompt-sync')();
var str = input("Enter a array : ")
var numberArray : number[] = str.split(' ').map(Number);

function calculateEvenSum(numberArray: number[]): number {
    var sum: number = 0;
    for (var i of numberArray) {
        if (i % 2 == 0)
            sum += i;
    }
    return sum;
}
console.log(calculateEvenSum(numberArray));