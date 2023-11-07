
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

console.log("celula peso: " + celula.peso);
let hijo = celula.mitosis(celula);
console.log(hijo);
console.log("celula: " + celula.tipo);




