var input = require('prompt-sync')();
var salary: number = Number(input("Enter a salary : "));
var savings: number = Number(input("Enter a salary : "));
var amountToFindTax: number = 0;
if (savings > 1_00_000) {
    amountToFindTax = salary - 1_00_000
}
else {
    amountToFindTax = salary - savings
}

function calulateTax(amountToFindTax: number): number {
    var exceedingAmount: number = 0;
    if (amountToFindTax <= 1_00_000)
        return 0;
    else if (amountToFindTax <= 2_00_000)
        return amountToFindTax * 0.10;
    else if (amountToFindTax <= 5_00_000) {
        exceedingAmount = amountToFindTax - 2_00_000;
        return exceedingAmount * 0.2 + 2_00_000 * 0.1;
    }
    else {
        exceedingAmount = amountToFindTax - 5_00_000;
        return 2_00_000 * 0.1 + 3_00_000 * 0.2 + exceedingAmount * 0.3;
    }
}
console.log("Tax Amount ", calulateTax(amountToFindTax));
