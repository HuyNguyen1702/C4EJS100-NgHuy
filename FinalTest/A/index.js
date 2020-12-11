function merge2String(a, b) {
    len = Math.min(a.length, b.length);
    c = "";
    for (let i = 0; i < len; i++) {
        c +=  a[i] + b[i];
    }
    if (a.length > b.length) {
        c += a.substring(len);
    }
    else if (a.length < b.length) {
        c += b.substring(len);
    }
    return c;
}

console.log(merge2String("abc", "123"));
console.log(merge2String("abc", "0123"));
console.log(merge2String("abcd", "123"));