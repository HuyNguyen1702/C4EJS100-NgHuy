let p1={
    Name: 'Xiaomi portable charger 2000mah',
    Brand:'Xiaomi',
    Price:428,
    Color:'White',
    Category:'Charger' 
};
let p2={
    Name: 'VSmart Active 1',
    Brand: 'VSmart',
    Price:5487,
    Color: 'Black',
    Category:'Phone'
};
let p3={
    Name:'IphoneX',
    Brand:'Apple',
    Price:21490,
    Color: 'Gray',
    Category:'Phone'
};
let p4={
    Name:'Samsung Galaxy A9',
    Brand:'Samsung',
    Price:8490,
    Color:'Blue',
    Category:'Phone'
};
let product =[p1,p2,p3,p4];
// ///5.1
// for (let i = 0 ; i < product.length;i++ ){
//     console.log(`#${i+1}`);
//     console.log(`Name: ${product[i].Name}`);
//     console.log(`Price: ${product[i].Price}`);
//     console.log('------------------------------');
// }
// ////5.2
// let a = prompt("Enter product position");
// for(let i=0;i<product.length;i++){
// if (i+1==a){
//     console.log(`Name: ${product[i].Name}`);
//     console.log(`Brand: ${product[i].Brand}`)
//     console.log(`Price: ${product[i].Price}`);
//     console.log(`Color: ${product[i].Color}`);
//     console.log(`Category: ${product[i].Category}`);
//     console.log('-----------------------------');
// }
// }
// ////5.3
// let b = prompt("Enter your category");
// for(let i =0 ;i<product.length;i++){
//     if(product[i].Category==b){
//     console.log(`Name: ${product[i].Name}`);
//     console.log(`Price: ${product[i].Price}`);
//     console.log('---------------------------------');
//     }
// }
// ////5.4
product[0].Provider='Phukienzero Dientuccc';
product[1].Provider='Tgdd Ddghn VhStore';
product[2].Provider='Tgdd';
product[3].Provider='Tgdd';

// for(let i = 0;i<product.length;i++){
//     console.log(`#${i+1}`);
//     console.log(`Name: ${product[i].Name}`);
//     console.log(`Price: ${product[i].Price}`);
//     console.log(`Provider: ${product[i].Provider}`);
//     console.log('---------------------------------');
// }

////5.5
let c = prompt('Enter provider');
for(let i=0;i<product.length;i++){
    let a =product.indexOf(c);
    if(a==-1){
    console.log(`Name: ${product[i].Name}`);
    console.log(`Brand: ${product[i].Brand}`)
    console.log(`Price: ${product[i].Price}`);
    console.log(`Color: ${product[i].Color}`);
    console.log(`Category: ${product[i].Category}`);
    console.log(`Provider: ${product[i].Provider}`);
    console.log('-----------------------------');
    }
}