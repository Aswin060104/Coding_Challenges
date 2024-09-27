

import { stdin } from 'process';
import * as readline from 'readline';

const r = readline.createInterface({
    input : process.stdin,
    output : process.stdout
}
);

r.question("Enter the Number : ",(n :string) => {
    var range : number = Number(n);
    for(var i : number = 1; i <= range; i++){
        if(i%3==0 && i%5==0)
            console.log("FizzBuzz - ",i);
        else if(i%3==0)
            console.log("Fizz - ", i);
        else if(i%5==0)
            console.log("Buzz - ",i);
        else
        console.log(i);
        
    }
});