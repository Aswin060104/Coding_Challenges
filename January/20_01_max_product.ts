let ar : number[] = [1,2,4,5,2,3,1];
ar = ar.filter((e,i)=> {
    return ar.indexOf(e) === i;
});
ar.sort((a,b) => b-a );
console.log(ar[0] * ar[1]);
