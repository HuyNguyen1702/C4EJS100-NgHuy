let dictonary = {
    debug : 'The process of figuring out why your program has a certain error and how to fix it',
    done : 'When your taks is compelete, the only thing you have to do is to wait for user to use it (no additional codes  or actions needed)',
    defect: 'The formal word for error', 
    pm : 'The short version of Project Manager, the person in charge of the final result of a project',
    uiux: 'UI mean User Interface , UX mean User Experience , are  the process to define how your  products looks and feels',
};
/// 4.1
alert('Hi there, this is dev dictionary');
let x = prompt('Enter a keyword');
switch (x){
    case 'debug':
        alert(dictonary.debug);
        break;
    case 'done':
        alert(dictonary.done);
        break;
    case 'defect':
        alert(dictonary.defect);
        break;
    case 'pm':
        alert(dictonary.pm);
        break;
    case 'uiux':
        alert(dictonary.uiux);
        break;
}
//// 4.2
// let s = prompt('Enter a keyword');
// if( s == null || s == undefined || s!='debug'&& s!= 'done'&& s !='defect' && s!='pm' && s!='uiux'){
//    let x = prompt(`We could not find your word : ${s}, leave your explanation: `);
//    dictonary.s=x;
//    alert('Done');
//    let a = prompt('Enter a keyword');
//    if(a=s){
//        alert(dictonary.s);
//    }
// }else if(s='debug'){
//     alert(dictonary.debug);
// }else if(s='done'){
//     alert(dictonary.done);
// }else if(s='defect'){
//     alert(dictonary.defect);
// }else if(s='pm'){
//     alert(dictonary.pm);
// }else if(s='s'){
//     alert(dictonary.s);
// }
