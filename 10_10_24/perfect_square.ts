/*
Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. 
In other words, it is the product of some integer with itself.

*/

function isPerfectSquare(num: number): boolean {
    var i : number = 1;
        while( i*i <= num){
            if( i*i == num){
                return true;
            }
            i++;
        }
        return false;  
};