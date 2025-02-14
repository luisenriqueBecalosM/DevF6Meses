let librosleidos=["El principito","La metamorfosis","El libro vaquero"]

function agregarLibro(titulo){
    
    librosleidos.push(titulo);
}

agregarLibro("La piramide");

function mostrarLibrosLeidos(){
    for(let i=0;i<librosleidos.length;i++){
        console.log(librosleidos[i]);
    }  
}
mostrarLibrosLeidos();