let dem = 0;
let increase=document.getElementById("increase");
let decrease=document.getElementById("decrease");
let count=document.getElementById("p");
increase.addEventListener('click',()=>{
    dem=dem+1;
    count.innerHTML=dem;
});
decrease.addEventListener('click',()=>{
    dem=dem-1;
    count.innerHTML=dem;
});