import * as readline from 'readline';
const c = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

c.question("Enter a and b : ", (values : string) => {
    var a : number = Number((values.split(" "))[0]);
    var b : number = Number((values.split(" "))[1]);
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("Values of a and b are ",a,b); 
});