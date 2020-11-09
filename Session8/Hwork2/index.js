let input=document.getElementById("input");
let count=document.getElementById('count');
var myVar;
var timer = document.getElementById("input");
var countDownSeconds;
function startTime(){ 
  myVar = setInterval(start, 1000);
  document.getElementById("count").innerHTML = timer.value;
  countDownSeconds=timer.value;
} 

function start(){
    countDownSeconds--;
  document.getElementById("count").innerHTML = countDownSeconds;
  if (countDownSeconds == -1){
    stop();
    document.getElementById("count").innerHTML = "0";  
  }
}

function stop(){
  clearInterval(myVar);
}