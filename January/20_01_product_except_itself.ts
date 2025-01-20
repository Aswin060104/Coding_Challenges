let ar: number[] = [5, 1, 4, 2];
let product: number = 1;
let ans: number[] = [];
let count: number = 0;
ar.forEach((e) => {
    if (e == 0)
        count++;
    else
        product *= e;
});
if (count > 1)
    ans.fill(0, 0, ar.length);
else {
    for (let i of ar) {
        if (i == 0) {
            ans.push(product)
        }
        else{
            ans.push(product / i);
        }
    }
    console.log(ans);
}