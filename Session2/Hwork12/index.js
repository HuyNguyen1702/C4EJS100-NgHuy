let canh = prompt('Enter number of edges')
let goc = (1 - 2/canh)*180
for (let i = 0; i < canh; i++) {
    fd(50)
    rt(180 - goc) 
}