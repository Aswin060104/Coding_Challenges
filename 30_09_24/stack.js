/*
Design a stack that supports increment operations on its elements.

Implement the CustomStack class:

CustomStack(int maxSize) Initializes the object with maxSize which is the maximum number of elements in the stack.
void push(int x) Adds x to the top of the stack if the stack has not reached the maxSize.
int pop() Pops and returns the top of the stack or -1 if the stack is empty.
void inc(int k, int val) Increments the bottom k elements of the stack by val.
If there are less than k elements in the stack, increment all the elements in the stack.
*/
var CustomStack = /** @class */ (function () {
    function CustomStack(maxSize) {
        this.size = 0;
        this.maxSize = 0;
        this.stack = [];
        this.maxSize = maxSize;
    }
    CustomStack.prototype.push = function (x) {
        if (this.maxSize > this.size)
            this.stack[this.size++] = x;
    };
    CustomStack.prototype.pop = function () {
        if (this.size > 0)
            return this.stack[--this.size];
        return -1;
    };
    CustomStack.prototype.increment = function (k, val) {
        for (var i = 0; i < k && i < this.maxSize; i++) {
            this.stack[i] += val;
        }
    };
    return CustomStack;
}());
var maxSize = 5;
var x = 5;
var obj = new CustomStack(maxSize);
obj.push(x);
var param_2 = obj.pop();
obj.increment(2, 100);
