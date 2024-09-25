var l : number[] = [45, 50, 35, 0 ,39, 110];
var max : number = 0;
var count : number = 1;
var start : number = 0;
var end : number = 0;


for(var index = 0; index < l.length; index++){
    
    if( l[index] < l[index +1 ])
        count++;
    else{
        if(count > max){
            max = count;
            start = index + 1 - count;
            end = index + 1
        }
        count = 1;
    }
}

console.log("The Maximum value is : " ,max);

console.log(l.slice(start,end));