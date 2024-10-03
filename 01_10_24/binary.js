var a = Number("100");
var b = Number("110010");
var ans = [];
var carry = 0;
console.log(a + " \n" + b);
while (a > 0 || b > 0) {
    var tem = a % 10 + b % 10;
    a = Math.trunc(a / 10);
    b = Math.trunc(b / 10);
    if (tem == 2) {
        ans.unshift('1');
        carry = 1;
    }
    else if (tem == 1) {
        if (carry == 1) {
            ans.unshift('0');
            carry = 1;
        }
        else
            ans.unshift('1');
    }
    else {
        if (carry == 1) {
            ans.unshift('1');
            carry = 0;
        }
        else {
            ans.unshift("0");
        }
    }
}
console.log(ans);
