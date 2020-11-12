function random(a,b) {
    return Math.floor(Math.random() * (a - b + 1) ) + b;
}
const x = random(4, 16);
console.log(x);
if (x < 4) {
  console.log('Failed: the number is smaller than 4');
} else if (x > 16) {
  console.log('Failed: the number is bigger than 16');
} else {
  console.log('Passed, bravo');
}
