var input = require('prompt-sync')();
var salary = Number(input("Enter a salary : "));
var savings = Number(input("Enter a salary : "));
var amountToFindTax = 0;
if (savings > 100000) {
    amountToFindTax = salary - 100000;
}
else {
    amountToFindTax = salary - savings;
}
function calulateTax(amountToFindTax) {
    var exceedingAmount = 0;
    if (amountToFindTax <= 100000)
        return 0;
    else if (amountToFindTax <= 200000)
        return amountToFindTax * 0.10;
    else if (amountToFindTax <= 500000) {
        exceedingAmount = amountToFindTax - 200000;
        return exceedingAmount * 0.2 + 200000 * 0.1;
    }
    else {
        exceedingAmount = amountToFindTax - 500000;
        return 200000 * 0.1 + 300000 * 0.2 + exceedingAmount * 0.3;
    }
}
console.log("Tax Amount ", calulateTax(amountToFindTax));
