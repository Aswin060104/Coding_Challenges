var input = require('prompt-sync')();
var s = input("Enter a string : ");
var word = input("Enter the word to be searched : ");
var stringArray = s.split(' ');
function wordCount(stringArray) {
    var count = 0;
    for (var _i = 0, stringArray_1 = stringArray; _i < stringArray_1.length; _i++) {
        var i = stringArray_1[_i];
        if (i === word)
            count++;
    }
    return count;
}
console.log(wordCount(stringArray));
