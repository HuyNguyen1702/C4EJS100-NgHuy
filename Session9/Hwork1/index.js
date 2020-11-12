let mypromise = new Promise(function(resolve,reject){
    resolve(setTimeout(()=>{console.log("Promise is the best")},2000));  
});
console.log(mypromise);


async function f(){

    let promise = new Promise((resolve,reject)=> {
        setTimeout(()=> resolve("Promise is the bset 2"),1000)
    });
    let result = await promise;
    alert(result);
}

f();

let mypromise3 = new Promise(function (resolve,reject){
    setTimeout(()=> reject(new Error("Promise is the best")),1000);
});

mypromise3.then(
    result => console.log(result),
    error => console.log(error)
);