let a = [1,2,3,4,5,6,7];
let i = a.length;
for ( let i =0 ; i <= a.length;i++){
let b = [Math.floor(Math.random()*a.length)];
a.splice(b,1);
}
console.log(a);