/*
Design a stack that supports increment operations on its elements.

Implement the CustomStack class:

CustomStack(int maxSize) Initializes the object with maxSize which is the maximum number of elements in the stack.
void push(int x) Adds x to the top of the stack if the stack has not reached the maxSize.
int pop() Pops and returns the top of the stack or -1 if the stack is empty.
void inc(int k, int val) Increments the bottom k elements of the stack by val. 
If there are less than k elements in the stack, increment all the elements in the stack.
*/
class CustomStack {
    size: number = 0;
    maxSize: number = 0;
    stack: number[] = [];
    constructor(maxSize: number) {
        this.maxSize = maxSize;
    }

    push(x: number): void {
        if (this.maxSize > this.size)
            this.stack[this.size++] = x;
    }

    pop(): number {
        if (this.size > 0)
            return this.stack[--this.size];
        return -1;
    }

    increment(k: number, val: number): void {
        for (var i: number = 0; i < k && i < this.maxSize; i++) {
            this.stack[i] += val;
        }
    }
}

var maxSize : number = 5;
var x : number = 5;
var obj = new CustomStack(maxSize)
obj.push(x);
var param_2 = obj.pop()
obj.increment(2, 100);