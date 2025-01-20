var ar = [1, 2, 4, 5, 2, 3, 1];
ar = ar.filter(function (e, i) {
    return ar.indexOf(e) === i;
});
ar.sort(function (a, b) { return b - a; });
console.log(ar[0] * ar[1]);
