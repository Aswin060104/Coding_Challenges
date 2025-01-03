var a = [1, 10, 23];
var b = [2, 40, 10, 31, 30];
var c = a.concat(b);
console.log(new Set(c.sort(function (a, b) { return a - b; })));
