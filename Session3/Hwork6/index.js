let s = prompt('Enter a squence of numbers, sperated by ","');
let a = s.split(',').map(a => +a);
let min =0;
for (let i=0; i<a.length; i++){
    if ( a[i]<min){
        min=a[i];
    }
}
alert(`The smallest number is ${min}`);