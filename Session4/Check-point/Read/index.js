// Read
console.log(movie);
console.log(movie.title);
console.log(movie.year);
console.log(movie.rate);


let x = prompt("What you want to know?");
if(x == null || x == undefined || x == ''){
    alert("x is a null or undefined");
}else if (x == 'title'){
    alert(movie.title);
}else if ( x == 'year'){
    alert(movie.year);
}else if (x == 'rate'){
    alert(movie.rate);
}