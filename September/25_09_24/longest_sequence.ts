var max : number = 0;
var count : number = 1;
var start : number = 0;
var end : number = 0;
var arraySize : number;

import * as readline from 'readline';

const r = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

r.question("Enter array size : ", (size : string) => {
    arraySize = Number(size);
    r.question("Enter array elements : ", (elements : string) => {
        
        var stringArray : string[] = elements.split(" ");
        var numberArray : number[] = [];

        for(var tem of stringArray)
            numberArray.push(Number(tem));

        for(var index = 0; index < numberArray.length; index++){
    
            if( numberArray[index] < numberArray[index +1 ])
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
        console.log(numberArray.slice(start,end));        
   });
});