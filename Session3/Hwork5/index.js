let s = (prompt('Enter a squence of numbers, sperated by ","'));
let a = s.split(',').map(a => +a)
let t=0;
for (let i=0; i<a.length; i++)
{
    t=t+a[i];
}
alert(t);
