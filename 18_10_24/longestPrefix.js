var input = require('prompt-sync')();
var s = input("Enter a string : ");
var stringAr = s.split(' ');
var index = 0;
var min = 100;
for (var _i = 0, stringAr_1 = stringAr; _i < stringAr_1.length; _i++) {
    var s = stringAr_1[_i];
    if (s.length < min)
        min = s.length;
}
var ans = "";
var flag = 0;
for (var i = 0; i < min; i++) {
    flag = 0;
    for (var j = 0; j < stringAr.length - 1; j++) {
        if (stringAr[j][i] == stringAr[j + 1][i]) {
            flag = 1;
        }
        else {
            flag = 0;
            break;
        }
    }
    if (flag == 1)
        ans += stringAr[0][i];
    else
        break;
}
console.log(ans);
