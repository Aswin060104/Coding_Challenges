let a : number[] = [1,10,23];
let b : number[] = [2,40,10,31,30];
let c : number[] = a.concat(b);
console.log(new Set(c.sort((a,b) => a - b )));