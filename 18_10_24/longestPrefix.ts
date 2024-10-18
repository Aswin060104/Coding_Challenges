let input = require('prompt-sync')();
var s : string = input("Enter a string : ")
var stringAr : string[] = s.split(' ');
var index : number = 0;
var min : number = 100;
for(var s of stringAr){
    if(s.length < min)
        min = s.length
}
var ans : string = "";
var flag : number = 0;
for(var i : number = 0; i < min; i++){
    flag = 0;
    for(var j : number = 0; j < stringAr.length - 1; j++){
        if(stringAr[j][i] == stringAr[j+1][i]){
            flag = 1;
        }
        else{
            flag = 0;
            break;
        }
    }
    if(flag == 1)
        ans += stringAr[0][i];
    else
        break
}
console.log(ans);
