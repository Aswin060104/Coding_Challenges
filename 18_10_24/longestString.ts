var s1 : string = "javascript express";
var s2 : string = "rtscript ety"
var ans : string = "";
for(var i : number = 0; i < s1.length; i++){
    var tem : string = "";
    for(var j : number = 0; j < s2.length; j++){
        if(s1[i] == s2[j]){
            var x = i;
            var y = j;
            while(s1[x] == s2[y]){
                tem += s1[x];
                x++;
                y++;
            }
            if( tem.length > ans.length)
                ans = tem;
            tem = "";
        }  
    }
}
console.log(ans);