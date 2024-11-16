/*
557. Reverse Words in a String III
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "Mr Ding"
Output: "rM gniD"
*/

function reverseWords(s: string): string {
    var rev : string[] = s.split(" ");
    for(var i : number = 0; i < rev.length; i++){
        rev[i] = rev[i].split("").reverse().join('');
    }
    return rev.join(" ")
};