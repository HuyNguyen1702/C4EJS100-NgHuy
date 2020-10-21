let a = prompt("Hi there, welcome to shop admin panel, what do you want? (C,R,U,D)");
let shop=['Jeans','T-shirt','Sockets'];
let B = true;
while(B){
  if(a != `C`&& a!= `R` && a!=`U` && a!=`D`){ 
    alert("The command is not supported!");
  }
      else if(a == `R`){
      console.log("The current items are: \n");
      for(let i =0;i<shop.length;i++){
          console.log(`${shop[i]}`);
      }
    }
    else if(a == `C`){
        let i=prompt("Enter the name of the new item");
        shop.push(i);
        alert("Done");
    }   
    else if( a == `U`){
      let i = prompt("Enter the position you want to update");
      let x = prompt("Enter the new name");
      shop[i]=x;
      alert('Done');
    }
    else if( a == 'D'){
      let i = prompt("Enter the position you want to delete");
      shop.splice(i,1);
      alert('Done');
    }
    if(a == 'S'){
      break;
    }
}