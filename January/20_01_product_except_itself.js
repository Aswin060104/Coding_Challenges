var ar = [5, 1, 4, 2];
var product = 1;
var ans = [];
var count = 0;
ar.forEach(function (e) {
    if (e == 0)
        count++;
    else
        product *= e;
});
if (count > 1)
    ans.fill(0, 0, ar.length);
else {
    for (var _i = 0, ar_1 = ar; _i < ar_1.length; _i++) {
        var i = ar_1[_i];
        if (i == 0) {
            ans.push(product);
        }
        else {
            ans.push(product / i);
        }
    }
    console.log(ans);
}
