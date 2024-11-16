/*
Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.

*/ 
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    console.log(Object.keys(obj));
    if (Object.keys(obj).length === 0)
        return true;
    return false;
};

console.log(isEmpty({}));