let ar : number[] = [1, 1, 0, 1, 1, 1];
let maxOnes : number = 0;
let count : number = 0;
for(let i of ar){
    if( i == 1)
        count++;
    else{
        if(maxOnes < count)
            maxOnes = count;
        count = 0;
    }
}
if(maxOnes < count)
    maxOnes = count;
console.log(maxOnes);
