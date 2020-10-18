let kg = prompt("Your weight in kg?");
let cm = prompt("Your height in cm?");
let bmi= (kg)/((cm/100)*(cm/100));
alert(`Your BMI is ${bmi}`);
if(bmi<=16){
    alert("Severly underweight");
} else if(16<=bmi<=18.5){
    alert("Underweight");
} else if (18.5<bmi<25){
    alert("Normal");
} else if(25<bmi<30){
    alert("Overweight");
} else if(bmi>30){
    alert("Obese");
}