let a = prompt("Enter name");
let s = a.split(',');
let b = [];
for(let i=0;i<s.length;i++){
    b.push(`<`+s[i]+`>`);
}
alert(b);