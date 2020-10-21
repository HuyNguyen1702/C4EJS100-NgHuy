let number1 = prompt("Enter the number ");
let number2 = number1.split(',');
let number3 = number2.filter(number2 => number2%2==1);
alert(`${number2} => ${number3}`);