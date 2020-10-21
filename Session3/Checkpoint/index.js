let n = prompt("Nhập n : = ");
let number=[];
for (let i=0;i<n;i++){
    number.push(prompt(`Nhập số thứ ${i+1}`));
}
console.log(number);
let Odd = [];
let Even = [];
for(let i of number){
    if(i%2==0)
    Even.push(i);
    else
    Odd.push(i);
}
console.log(Even);
console.log(Odd);
for(let i=0;i<Odd.length;i++){
    for(let j=i+1;j<Odd.length;j++)
    if(Odd[i]==Odd[j]){
        Odd.splice(i,1);
    }
}
console.log(Odd);
for(let i=0;i<Even.length;i++){
    for(let j=i+1;j<Even.length;j++)
    if(Even[i]==Even[j]){
        Even.splice(i,1);
    }
}
console.log(Even);