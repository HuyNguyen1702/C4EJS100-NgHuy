let timeSheetData = [
    {
        project : 'Learn front-end',
        task : 'Learn HTML',
        time: 6
    },
    {
        project : 'Learn front-end',
        task : 'Learn CSS',
        time : 8
    },
    {
        project: 'Learn front-end',
        task: 'Learn JS Variables and Data Types',
        time: 6
    },
    {
        project: 'Learn git',
        task : 'Learn git basics',
        time: 2
    }
]
let table=document.getElementById('table');
console.log(table);
let tr=document.getElementById('tr');
for(let i =0 ;i<timeSheetData.length;i++){
    table.insertAdjacentHTML('beforeend',`<tr><th>${timeSheetData[i].project}</th><th>${timeSheetData[i].task}</th><th>${timeSheetData[i].time}</th><th><button class="remove">x</button>  <button id="update">U</button></th></tr>`);
}
const ip1=document.getElementById("ip1");
const ip2=document.getElementById("ip2");
const ip3=document.getElementById("ip3");
let newItem = {}
newItem.project=ip1.value;
newItem.task=ip2.value;
newItem.time=ip3.value;
// timeSheetData.push(newItem);
let btn=document.getElementById('add');
btn.addEventListener('click',()=>{
    newItem.project=ip1.value;
    newItem.task=ip2.value;
    newItem.time=ip3.value;
    timeSheetData.push(newItem);
    let a = timeSheetData.indexOf(newItem);
    table.insertAdjacentHTML('beforeend',`<tr><th>${timeSheetData[a].project}</th><th>${timeSheetData[a].task}</th><th>${timeSheetData[a].time}</th><th><button class="remove">X</button>  <button class="update">U</button></th></tr>`);
})
let remove=document.getElementsByClassName('remove')
function update_list(){
    table.innerHTML = '';
    for(let i = 0 ; i< timeSheetData.length;i++){
        table.insertAdjacentHTML('beforeend',`<tr><th>${timeSheetData[i].project}</th><th>${timeSheetData[i].task}</th><th>${timeSheetData[i].time}</th><th><button class="remove">X</button>  <button class="update">U</button></th></tr>`);
    };

    for(let i =0;i<remove.length;i++){
        remove[i].addEventListener('click',()=>{
            timeSheetData.splice(i,1);
            update_list();
        })
    };
}
update_list();

let clear=document.getElementById('clear');
clear.addEventListener('click',()=>{
    ip1.value='';
    ip2.value='';
    ip3.value='';
})

let update=document.getElementsByClassName('update');
    for(let i =0 ;i<update.length;i++){
    update[i].addEventListener('click',()=>{
    ip1.value=timeSheetData[i].project;
    ip2.value=timeSheetData[i].task;
    ip3.value=timeSheetData[i].time;
    btn.innerHTML='update';
    btn.addEventListener('click',()=>{
    newItem.project=ip1.value;
    newItem.task=ip2.value;
    newItem.time=ip3.value;
    let a = timeSheetData.indexOf(newItem);
    timeSheetData[a].project.innerHTML=ip1.value;
    timeSheetData[a].task.innerHTML=ip2.value;
    timeSheetData[a].time.innerHTML=ip3.value;
    // table.insertAdjacentHTML('beforeend',`<tr><th>${timeSheetData[a].project}</th><th>${timeSheetData[a].task}</th><th>${timeSheetData[a].time}</th><th><button class="remove">X</button>  <button class="update">U</button></th></tr>`);
    })
})
}