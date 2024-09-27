function isEmpty(obj) {
    console.log(Object.keys(obj));
    if (Object.keys(obj).length === 0)
        return true;
    return false;
}
;
console.log(isEmpty({}));
