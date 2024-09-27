import * as r from 'readline';

const r3 = r.createInterface({
    input : process.stdin,
    output : process.stdout
});

r3.question("Enter the Number : ",(n :string) => {
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