const  d = document.getElementsByTagName('button');
/// 11.2 READ
// console.log(d[0]);
/// 11.3 Catch event Click
d[0].addEventListener('click',() =>{
    console.log(d[0]);
}
);
const a =  document.getElementsByTagName('input');
a[0].addEventListener('keydown',(e)=>{
    console.log(e.key.toUpperCase())
});

const c = document.getElementsByTagName('div');
console.log(c[0]);
c[0]=a[0];
console.log(c[0]);

