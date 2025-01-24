var ar = [1, 1, 0, 1, 1, 1];
var maxOnes = 0;
var count = 0;
for (var _i = 0, ar_1 = ar; _i < ar_1.length; _i++) {
    var i = ar_1[_i];
    if (i == 1)
        count++;
    else {
        if (maxOnes < count)
            maxOnes = count;
        count = 0;
    }
}
if (maxOnes < count)
    maxOnes = count;
console.log(maxOnes);
