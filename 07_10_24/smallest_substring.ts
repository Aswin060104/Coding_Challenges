/*
You are given a string s consisting only of uppercase English letters.
You can apply some operations to this string where, in one operation, 
you can remove any occurrence of one of the substrings "AB" or "CD" from s.
Return the minimum possible length of the resulting string that you can obtain.
Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings.

Example 1:

Input: s = "ABFCACDB"
Output: 2

*/

function minLength(s: string): number {
    while(true){
        if(s.match("AB")){
            s = s.replace("AB","");
        }
        else if(s.match("CD")){
            s = s.replace("CD","");
        }
        else{
            break;
        }
    }
    return s.length;
      
    };

console.log(minLength("ABFCACDB"));