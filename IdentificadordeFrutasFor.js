let frutas = ["manzana", "banana", "manzana", "naranja", "plátano", "manzana"];

let cantidadfrutas={}
let i=0;
while(i<frutas.length){
    let fruta=frutas[i]
    if(cantidadfrutas[fruta]){
        cantidadfrutas[fruta]++;
    }
    else {
        cantidadfrutas[fruta]=1;
    }
    i++;
}
for (let fruta in cantidadfrutas) {
    console.log(`${fruta}: ${cantidadfrutas[fruta]}`);
}