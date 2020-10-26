// Update

let movie = {
    title: 'The dark knight rises',
    year : 2012,
    rate : 8.4,
};

movie.rate=8.7
console.log(movie);
movie.rate+=0.5;
console.log(movie);


// Update 
let a = prompt("What you want to update?");
let b = prompt("What is the update?");
if(a == 'title'){
    movie.title=b;
}else if(a== 'year'){
    movie.year=b;
}else if (a=='rate'){
    movie.rate=b;
}
console.log(movie);