async function getAPI(){
    const conn = await fetch('https://sheetdb.io/api/v1/0iwc0ytof9qin');
    const data = await conn.json();
    let prods = [];
    for ( let item of data){
        prods.push(item.name);
    }
    console.log(prods);
    update_list(prods);
}

async function searchAPI(name){
    const conn = await fetch (`https://sheetdb.io/api/v1/0iwc0ytof9qin/search?name=${name}`);
    const data = await conn.json();
    let prods = [];
    for ( let item of data){
        prods.oush(item.name);
    }
    console.log(prods);
    update_list(prods);
}

// searchAPI('');
getAPI();

function postAPI(name){
    id=makeid(5);
    axios.post('https://sheetdb.io/api/v1/0iwc0ytof9qin',{
        "data":{"id":id, "name":name}
    }).then(response =>{
        console.log(response.data);
        getAPI();
    });
}

function delAPI(name){
    axios.delete(`https://sheetdb.io/api/v1/0iwc0ytof9qin/name/${name}`)
    .then(response => {
        console.log(response.data);
        getAPI();
    });
}

function makeid(length){
    var result = '';
    var characters = 'abcdefghiklmnopqrstuvwxyz0123456789';
    var charactersLength=characters.length;
    for ( var i = 0;i<length;i++){
        result += characters.charAt(Math.floor(Math.random()*charactersLength));
    }
    return result;
}

const list = document.getElementsById('item_list');

function update_list(items) {
    list.innerHTML='';
    for ( let  i = 0 ; i < items.lenght; i++){
        list.insertAdjacentHTML("beforeEnd",`<li><span>${items[i]}</span><button class="remove_btns">x</button></li>`);
    };
    const remove_btns = document.getElementsByClassName('remove_btns');
    for ( let i =0 ; i< remove_btns.length;i++){
        remove_btns[i].addEventListener('click',()=>{
            delAPI(items[i]);
        });
    };
}

const add_btn=document.getElementById('add_btn');
const item_input= document.getElementById('item_input');

add_btn.addEventListener('click',()=>{
    let new_item=item_input.value;
    if(new_item == ''){
        alert('pls dont leave it blank');
    }else {
        postAPI(new_item)
        item_input.value='';
    };
});

item_input.addEventListener('keydown',(e)=>{
    let new_item=item_input.value;
    if(new_item==''){
        console.log('pls dont leave it blank');
    }else {
        let word = item_input.value;
        searchAPI(word);
    };
});