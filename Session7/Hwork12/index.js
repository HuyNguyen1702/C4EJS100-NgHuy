let item = ['Backpack','MiBand watch','Ring'];
console.log(item);
let ul = document.getElementById('item_list_ul');
console.log(ul);
function update(){
    for(let i =0 ;i< item.length;i++){
        ul.insertAdjacentHTML("beforeend",`<li><span>${item[i]}</span> <button id="del_btn">Remove</button> </li>`);
        // ul.insertAdjacentHTML("beforeend",`<button id="del_btn">Remove</button>`);
    }
}
update();
let a=document.getElementById("item_input"); 
let btn = document.getElementById("add_btn");
btn.addEventListener('click',()=>{
    console.log(a.value);
    item.push(a.value);
    console.log(item);
    ul.insertAdjacentHTML("beforeend",`<li><span>${a.value}<span><button>Remove</button></li>`);
    item_input.value='';
    console.log(ul)
})
let del_btn=document.getElementById("del_btn");
//12.13
// del_btn.addEventListener('click',()=>{
//     console.log("Remove");
// })
//12.14
// let newItem;
// item.push(newItem);
// btn.addEventListener('click',()=>{
//     ul.insertAdjacentHTML("beforeend",`<li id="item_${item.length-1}><span>${newItem}</span><button id="btn_${item.length-1}>Remove</button>`);
//     let xoa = document.getElementById(`btn_${item.length-1}`);
//     let them = document.getElementById(`item_${item.length-1}`);
//     xoa.addEventListener('click',()=>{
//         them.remove();
//     })
// })