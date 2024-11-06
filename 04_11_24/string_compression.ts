/**
3163. String Compression III
Solved
Medium
Topics
Companies
Hint
Given a string word, compress it using the following algorithm:

Begin with an empty string comp. While word is not empty, use the following operation:
Remove a maximum length prefix of word made of a single character c repeating at most 9 times.
Append the length of the prefix followed by c to comp.
Return the string comp.

Example 1:

Input: word = "abcde"

Output: "1a1b1c1d1e"

Explanation:

Initially, comp = "". Apply the operation 5 times, choosing "a", "b", "c", "d", and "e" as the prefix in each operation.

For each prefix, append "1" followed by the character to comp.
 */

function compressedString(word: string): string {
    var count : number = 1;
    var i : number = 0;
    var ans : string = ""; 
    while(i < word.length){
        if(word[i] == word[i+1]){
            i++;
            count++;
        }
        else{
            while(count > 9){
                ans += ( '9' + word[i]);
                 count-=9;
            }
            ans += (count + word[i]);
            count = 1;
            i++;
        }
    }
    return ans
};