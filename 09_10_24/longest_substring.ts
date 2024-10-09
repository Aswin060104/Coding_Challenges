/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

*/

function lengthOfLongestSubstring(s: string): number {
    var ans : number = 0;
    var tem : string = "";
    var check : string[] = [];
    if(s == " ")
    return 1;
    for(var t of s){
        //console.log(tem);
        if(!tem.includes(t)){
            tem += t;
        }
        else{
            if(ans < tem.length){
                ans = tem.length;
                console.log(tem)
            }
            for(var i = tem.length - 1; i > -1; i--){
                if(!check.includes(t))
                    check.unshift(tem[i]);
                else
                    break;
            }
            tem = check.join('');
            check = [];
            if(tem[0] == t){
                tem = tem.substring(1,tem.length);
                tem += t;
            }
            else
                tem = t;
            
        }
    }
    console.log(tem);
    return tem.length > ans ? tem.length : ans;
};

lengthOfLongestSubstring("abc  sdf ghu");