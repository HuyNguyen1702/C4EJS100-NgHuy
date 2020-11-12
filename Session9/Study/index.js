async function load(){
    const conn = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/?fbclid=IwAR0AjcRccc5QCA3z7Q28MW15VPgt4jMpB38BdE53RlWcBTEWzdMgpb-nX1o');
    const data = await conn.json();
    console.log(data);
}
load();

function generatedId(){
    const x = Math.random();
    const y = x.toString(36);
    const z = y.substr(2,9);
    return z;
}
let x = generatedId();
console.log(x); 