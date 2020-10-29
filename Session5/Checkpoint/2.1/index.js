let s  = ['to','be','that','of','elon','to','this','now','back','cool','hey','love','of','life','that','rain','summer','color','now','of','hat','late','sorry','my','team'];
console.log(s);
let countData = {};
for (let i =0 ; i< s.length;i++){
    const c = s[i].split(',');
    if(countData[c]){
        countData[c]++;
    }else {
        countData[c]=1;
    }
}
console.log(countData);