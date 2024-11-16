/*Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
*/

function countSubstrings(s: string): number {
    var count : number = s.length;
    for(var i : number = 0; i < s.length; i++){
        for(var j : number = i+2; j <= s.length; j++){
            var substring : string = s.slice(i,j);
            if(palindrome(substring))
                count++;
        }
    }
    return count;
};

function palindrome(s : string)  : boolean {
    var start : number = 0;
    var end : number = s.length - 1;
    while(start <= end){
        if(s.charAt(start)!=s.charAt(end))
            return false;
        start++;
        end--;
    }
    return true;
}

console.log(countSubstrings("malayalam"));