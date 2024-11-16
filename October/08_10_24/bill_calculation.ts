/*At a lemonade stand, each lemonade costs $5. 
Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills).
 Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. 
 You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, return true
 if you can provide every customer with the correct change, or false otherwise.
 
*/

function lemonadeChange(bills: number[]): boolean {
    var five : number = 0;
    var ten : number = 0;
    var twenty : number = 0;
    for(let i : number = 0; i < bills.length; i++){
        if(bills[i] == 5){
            five++;
        }
        else if(bills[i] == 10 && five > 0){
            five--;
            ten++;
        }
        else if(bills[i] == 20){
            if( ten > 0 && five > 0){
                ten--;
                five--;
            }
            else if(five > 2){
                five-=3;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }
    return true;
};
console.log(lemonadeChange([5,10,5,20]));