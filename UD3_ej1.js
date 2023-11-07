
let prototipo = {
    mitosis(objeto){
        var hijos = [];
                 
            let hijo1 = Object.create(prototipo);
            hijo1.nombre = "descendiente " + ((Math.random() * 1000) + 1) ;
            hijo1.peso = objeto.peso;
            hijo1.tipo = objeto.tipo;
            hijo1.divisible = objeto.divisible;
            
            hijos.push(hijo1);

            let hijo2 = Object.create(prototipo);
            hijo2.nombre = "descendiente " + ((Math.random() * 1000) + 1) ;
            hijo2.peso = objeto.peso;
            hijo2.tipo = objeto.tipo;
            hijo2.divisible = objeto.divisible;
            
            hijos.push(hijo2);

        delete objeto.nombre;
        delete objeto.peso;
        delete objeto.tipo;
        delete objeto.divisible;

        return hijos;
    }
}

let celula = {
    nombre : "celula_madre",
    peso : 4,
    tipo : "roja",
    divisible : true,    
}

Object.setPrototypeOf(celula, prototipo);

//comprobaciones
console.log("celula que realiza mitosis: " + celula.nombre);
let hijo = celula.mitosis(celula);
console.log(hijo);                        //mitosis celula madre
console.log("celula: " + celula.nombre); //comprobar que celula ya no tiene atributos
console.log("celula que realiza mitosis:: " + hijo[0].nombre);  
let nietos = hijo[0].mitosis(hijo[0]);   //mitosis uno de los hijos
console.log(nietos);    
console.log("celula: " + hijo[0].nom); //comprobar que hijo ya no tiene atributos




