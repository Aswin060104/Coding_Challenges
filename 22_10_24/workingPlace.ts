var input = require('prompt-sync')();
var age = Number(input("Enter the Age : "));
var sex = input("Enter sex : ( M or F : ) ");
var maritalStatus = input("Enter marital Status : ");
if(sex === "F")
    console.log("She will only work in urban");
else if(sex === "M"){
    if( age > 20 && age <= 40)
        console.log("He may work in any where");
    else if( age > 40 && age < 60)
        console.log("He will work in urban areas only");
    else
        console.log("Invalid Input");
}
else
    console.log("Invalid Input");