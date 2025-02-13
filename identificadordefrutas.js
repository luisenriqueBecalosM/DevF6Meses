
let frutas = ["manzana", "banana", "manzana", "naranja", "plátano", "manzana"];

let numerodefrutas={};

for(let i=0;i<frutas.length;i++){
    let tipodefruta = frutas[i];
if(numerodefrutas[tipodefruta]){
    numerodefrutas[tipodefruta]++;
}
else 
numerodefrutas[tipodefruta]=1;
}

for (let tipodefruta in numerodefrutas) {
    console.log(`${tipodefruta}: ${numerodefrutas[tipodefruta]}`);
}