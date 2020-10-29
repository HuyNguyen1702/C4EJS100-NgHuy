const s = 'Bo em hut rat nhieu thuoc. Me em nuoc mat le nhoa';

// Thuat toan => In
const countData = {
};
for(let i =0 ;i < s.length;i++){
    const c = s[i].toLocaleLowerCase();
    console.log(c);
    if(countData[c]){
        countData[c]++;
    }
    else {
        countData[c]=1;
    }
}
console.log(countData);
// const count ...

// Structure

// 1 => Array 
/*
[
    {
        value : 'b',
        count: 1
    },
    {
        value : 'o',
        count : 4
    }
]
*/

// 2 => Object

/*
{
    'b':1,
    'o':4,
}
*/