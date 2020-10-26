penup();
rt(180);
lt(20);
pendown();
for (let i=1; i <= 60; i++){
  fd(10);
  lt(360/60);
}
penup();
rt(90);
fd(80);
pendown();
for (let i=1; i <= 40; i++){
  fd(10);
  lt(360/40);
}
penup();
lt(90);
fd(75);
rt(90);
fd(10);
pendown();
for (let i=1; i <= 20; i++){
  fd(10);
  lt(360/20);
}
penup();
rt(90);
fd(75);
lt(90);
fd(10);
pendown();
for (let i=1; i <= 20; i++){
  fd(10);
  lt(360/20);
}
penup();
rt(90);
fd(100);
lt(90);
fd(-20);
pendown();
for (let i=1; i <= 60; i++){
  fd(10);
  lt(360/60);
}
penup();
lt(90);
fd(65);
lt(90);
fd(100);
pendown();
for(let i = 1 ; i<=4;i++){
    fd(30);
    rt(90);
}
penup();
rt(90);
fd(38);
rt(90);
fd(100);
pendown();
for(let i=0;i<=4;i++){
    fd(30);
    rt(90);
}
penup();
lt(90);
fd(30);
rt(90);
fd(80);
for(let i = 1; i<=4;i++){
    if(i%2==0){
        fd(20);
        rt(90);
    }else if(i%2==1){
        fd(4);
        rt(90);
    }
}
penup();
lt(90);
fd(10);
rt(90);
fd(80);
pendown();
for(let i = 1; i<=4;i++){
    if(i%2==0){
        fd(20);
        rt(90);
    }else if(i%2==1){
        fd(4);
        rt(90);
    }
}
penup();
lt(90);
fd(10);
rt(90);
fd(50);
pendown();
for(let i = 1; i<=4;i++){
    if(i%2==0){
        fd(20);
        rt(90);
    }else if(i%2==1){
        fd(6);
        rt(90);
    }
}
penup();
rt(90);
fd(500);
lt(90);
fd(500);
pendown();
for(let i=1;i<=4;i++){
    fd(20);
    rt(90);
}


