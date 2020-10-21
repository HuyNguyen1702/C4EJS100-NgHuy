console.log("Init");
let movies=['A','B','C'];
console.log(movies);
console.log("Creat");{
    let i = prompt("Add new items");
    movies.push(i);
    console.log(movies);
    }
    console.log("Read");
    {
        let i = prompt("Enter the i position");
        console.log(movies[i]);
    }
    console.log("Update-1");{
        let i = prompt('Enter moviesTitles');
        movies[0]=i;
        console.log(movies);
    }
    console.log("Update-2");{
        let i = prompt('Enter moviesTitles');
        let x = prompt('Enter the position');
        movies[x]=i;
        console.log(movies);
    }
    console.log('Delete-1');{
        let i = prompt('Enter the position ');
        movies.splice(i,1);
        console.log(movies);
    }
    console.log('Delete-2');{
        let i = prompt('Enter the position ');
        let n = prompt('Enter n item you want to delete');
        movies.splice(i,n);
    }
    console.log('Read-1');
    { 
        for(let i=0;i<movies.length;i++)
        console.log(movies[i]);
    }
    console.log('Read-2');
    {
        for (let i=0;i<movies.length/2;i++)
        console.log(movies[i]);
    }
console.log('Read-3');
{
    let x = 1;
    for (let i=0;i<movies.length;i++)
    console.log(`${x++}"."${movies[i]}`);
}
console.log('UpdateAll');
{
    for(let i=0;i<movies.length;i++)
    movies[i]=movies[i].toLowerCase();
}
console.log('Purpose of While-1');
{
    let x = prompt("Register an username");
    if(x > 15){
        alert('Your user name is too long');
    }else if(x <= 15) {
        alert('Good username');
    }
}
console.log('Purpose of While - 2');{
let x;
    while(true){
     x = Number(prompt("How many legs does a spider have? \n 1.None \n 2. 4 legs \n 3. 8 legs \n 4. 12 Legs"));
     if(!x){
         alert("Please enter again");
     }
    if(x){
        break;
    } 
}
if (x==3){
    alert("Bravo, you are correct");
}
else {
alert("Good luck next time");
}
}