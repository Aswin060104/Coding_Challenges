/** 2490. Circular Sentence

A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

For example, "Hello World", "HELLO", "hello world hello world" are all sentences.
Words consist of only uppercase and lowercase English letters. Uppercase and lowercase English letters are considered different.

A sentence is circular if:

The last character of a word is equal to the first character of the next word.
The last character of the last word is equal to the first character of the first word.
For example, "leetcode exercises sound delightful", "eetcode", "leetcode eats soul" are all circular sentences. However, "Leetcode is cool", "happy Leetcode", "Leetcode" and "I like Leetcode" are not circular sentences.

Given a string sentence, return true if it is circular. Otherwise, return false.
 */
function isCircularSentence(sentence: string): boolean {
    var str : string[] = sentence.split(" ");
    for(var i = 0; i < str.length - 1; i++){
        if(str[i][str[i].length - 1] != str[i+1][0])
            return false;
    }
    return sentence[0] == sentence[sentence.length-1];
};