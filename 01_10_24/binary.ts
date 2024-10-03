var a : number = Number("100");
var b : number = Number("110010");

var ans : string[] = [];

var carry : number = 0;

console.log(a+" \n"+b);

while(a > 0 || b > 0){
    var tem : number = a%10 + b%10;
    a = Math.trunc(a/10);
    b = Math.trunc(b/10);
    
    if(tem == 2){
        if(carry == 1){
            ans.unshift('1');
            carry = 0;
        }
        else{
            ans.unshift('0');
        }
    }
    else if( tem == 1 ){
        if(carry == 1){
            ans.unshift('0');
            carry = 1;
        }
        else
            ans.unshift('1');
    }
    else{
        if(carry == 1){
            ans.unshift('1');
            carry = 0;
        }
        else{
            ans.unshift("0");
        }
    }
}
console.log(ans);
