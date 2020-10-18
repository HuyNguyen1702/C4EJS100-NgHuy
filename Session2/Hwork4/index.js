console.log("Câu 4: \n");
let n = prompt("Enter a number : ");
let s = 1;
for (let i =1; i< n;i++){
    s=s*i;
}
alert(`The factorial of ${n} is ${s}.`);