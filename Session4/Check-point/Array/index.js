let movie1={
    title:'Attack on titans',
    year:2013,
    rate:8.8,
};
let movie2 = {
    title:'My boss my hero',
    year:2006,
    rate:8.2,
};
let movie3 = {
    title:'Mind hunter',
    year:2017,
    rate:8.6,
};
let movie = [movie1,movie2,movie3];
console.log(movie);
console.log(movie[0]);
console.log(movie[2].title);
for(let i = 0; i<movie.length;i++){
    console.log(movie[i]);
}
for(let i=0;i<movie.length;i++){
    console.log(movie[i].title);
    console.log(`Year: ${movie[i].year}`);
    console.log(`Rate: ${movie[i].rate}`);
    console.log('----------------------------------');
}
movie[2].rate+=0.7;
