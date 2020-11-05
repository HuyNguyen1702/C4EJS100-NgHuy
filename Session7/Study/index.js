// function hiHuy() {
//     alert("Hi Huy");
//     alert('Function is great');
// };
// // hiHuy();

// function sayHi(name, comment){
//     alert('hi ' + name);
//     alert(`${name}, ${comment}`);
// }
// sayHi('Huy','Hello world');

// Call back - function as parameter 
//  function sayHi(name){
//     alert('Hi '+ name)
// }
// function sayGoodBye(name){
//     alert('Goodbye'+ name)
// }
// function testSay (f){
//     f();
// }
// testSay(sayHi('Huy'));


// Arraow function

// function sayHi(name){
//     alert('Hi'+name);
// }
// const sayHi = (name) => {
//     alert('Hi'+name);
// }


// setTimeOut 
// function run(){
//     console.log('Hihi');
// }
// setTimeOut(run,5);

// setTimeout(() => {
//     console.log('Hi');
// },1000);

// Read
const d = document.getElementById('msg');
/// Update

d.addEventListener('click', ()=>{
    d.textContent = 'Hi there';
    d.style.color='red';
    d.style.fontSize='50px';
}
);
// cach 2 
// d.addEventListener('click', (e)=>{
//     e.target.style.color='red';
// });
// //d.textContent = 'Hi there';


// Creat 
d.insertAdjacentHTML(`afterBegin`,`<div>Huy</div>`)
// beforeBegin : nam ngoai ben tren  the div dang dung 
// beforeEnd: cuoi the div dang dung 
// afterBegin:dau  the div dang dung 
// afterEnd: nam ngoai ben duoi the div dang dung 

