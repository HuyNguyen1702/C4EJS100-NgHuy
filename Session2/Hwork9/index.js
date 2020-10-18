let a = 6;
console.log("Câu 9 ");
console.log("a)");
for(let i=0;i<=a;i++){
    if(i<(a/2)){
        let s=0;
        s++;
        console.log("L");
    }
    else if(i>(a/2)){
        let s=0;
        s++;
        console.log("H");
    }
} 
console.log("b)");
let b= prompt("Enter the total number of L's and H's");
for(let i=0;i<=b;i++)
{
    if(i<b/2){
        let s=0;
        s++;
        console.log("L");
    }
    else if(i>b/2){
        let s=0;
        s++;
        console.log("H");
    }
}
console.log("c)");
let c = 8;
for(let i=0;i<c;i++){
    if(i%2==0){
        console.log("0");
    }else {
        console.log("1");
    }
}
console.log("d)");
let d = prompt("Enter n =: ");
for(let i=0;i<d;i++){
    if(i%2==0){
        console.log("0");
    }else {
        console.log("1");
    }
}
