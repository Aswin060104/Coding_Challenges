/*
20. Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

*/
function isValid(s: string): boolean {
    var stack: string[] = [];
    var size: number = 0;
    if(s.length == 1)
        return false;
    for (var i: number = 0; i < s.length; i++) {
        if (s[i] == ']') {
            if (stack[size - 1] != '[')
                return false;
            else
                size--;
        }
        else if (s[i] == ')') {
            if (stack[size - 1] != '(')
                return false;
            else
                size--;
        }
        else if (s[i] == '}') {
            if (stack[size - 1] != '{')
                return false;
            else
                size--;
        }
        else {
            stack[size++] = s[i];
        }
    }
    return size == 0 ? true : false;
};