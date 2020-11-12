function tinh(a,b,c,d){
    return Math.sqrt(((a-c)*(a-c)+(b-d)*(b-d)));
}
const d = tinh(3, 10, 0, 6);
console.log(d);
if (d !== 5) {
  console.log('Failed: the calculation is wrong');
} else {
  console.log('Passed, bravo');
}
