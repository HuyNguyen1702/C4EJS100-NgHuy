const inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },

    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
    },
]
let inventoryByBrand = {
    "Dell":[],
    "Asus":[],
    "HP":[]
};
for(let i = 0 ; i < inventory.length ; i++ ){
    const x = inventory[i];
    const brand = x.brand;
    inventoryByBrand[brand].push(x);
}
console.log(inventoryByBrand);
let a = prompt("Which brand?");
let tong = 0;
let string = '';
for(let lap of inventoryByBrand[a]){
    tong = tong + lap.price*lap.quantity;
    string = string + '\n' + lap.name ;
}
let tong2=tong.toLocaleString();
alert(`There are ${inventoryByBrand[a].length} generation of ${a} in inventory \n ${string} \nTotal: ${tong2}`);