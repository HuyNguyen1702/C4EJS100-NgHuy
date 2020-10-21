console.log('Ex 7:');
const a = [3,4,6,-9,10,-88,2];
let i = Number(prompt('Enter a number'));
if(a.indexOf(i)==-1){
    alert("NOT FOUND");
}else {
    alert(`FOUND AT ${a.indexOf(i)}`);
}