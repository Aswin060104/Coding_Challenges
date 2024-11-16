var input = require('prompt-sync')();
var s: string = input("Enter a string : ");
var word: string = input("Enter the word to be searched : ")
var stringArray: string[] = s.split(' ');

function wordCount(stringArray: string[]): number {
    var count: number = 0;
    for (var i of stringArray) {
        if (i === word)
            count++;
    }
    return count;
}
console.log(wordCount(stringArray));
