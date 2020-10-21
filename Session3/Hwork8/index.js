let sheep = [5,7,300,90,24,50,75];
console.log("Hello, my name is Huy and here is my sheep size");
console.log(...sheep);
let max = Math.max(...sheep);
console.log(`Now my biggest sheep has size ${max} , let's shave it`);
let a=sheep.indexOf(max);
sheep[a]=8;
console.log('After shareing , here is my flock');
console.log(...sheep);
console.log("Month-1");
console.log('One month has passed, my sheep have grown,here are their sizes');
for(let i=0;i<sheep.length;i++){
    sheep[i]=sheep[i]+50;
}
console.log(...sheep);
max = Math.max(...sheep);
console.log(`Now my biggest sheep has size ${max} , let's shave it`);
a=sheep.indexOf(max);
sheep[a]=8;
console.log('After shareing , here is my flock');
console.log(...sheep);
console.log('Month-2');
console.log('One month has passed, my sheep have grown,here are their sizes');
for(let i=0;i<sheep.length;i++){
    sheep[i]=sheep[i]+50;
}
console.log(...sheep);
max = Math.max(...sheep);
console.log(`Now my biggest sheep has size ${max} , let's shave it`);
a=sheep.indexOf(max);
sheep[a]=8;
console.log('After shareing , here is my flock');
console.log(...sheep);
console.log('Month-3');
console.log('One month has passed, my sheep have grown,here are their sizes');
for(let i=0;i<sheep.length;i++){
    sheep[i]=sheep[i]+50;
}
console.log(...sheep);
let tong=0;
for(let i=0;i<sheep.length;i++){
    tong=tong+sheep[i];
}
console.log(`My flock has size in total: ${tong}`);
console.log(`I would get ${tong} * 2$ = ${tong*2}`);
