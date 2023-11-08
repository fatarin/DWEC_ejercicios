class Gato{
        #hambre;
        #cansancio;
        #felicidad;

    constructor(){
        this.hambre = 10;
        this.cansancio = 10;
        this.felicidad = 10;       
    }

    //getters
    getHambre(){return this.hambre;}
    getCansancio(){return this.cansancio;}
    getFelicidad(){return this.felicidad;}
    //setters
    setHambre(valor){this.hambre+=valor;}
    setCansancio(valor){this.cansancio+=valor;}
    setFelicidad(valor){this.hambre+=valor;}
}

let patricio = new Gato();


const addmodule = require ('./UD3_ej2_modulos.js');

//comprobaciones
console.log("Estdo inicial");
addmodule.estado(patricio);

console.log("Primeras interacciones: come, duerme y juega");
addmodule.come(patricio);
addmodule.duerme(patricio);
addmodule.juega(patricio);
addmodule.estado(patricio);

console.log("Paso del tiempo");
addmodule.pasoTiempo(patricio, addmodule.aleatorio());
addmodule.estado(patricio);

console.log("Segundas interacciones: come, duerme y juega");
addmodule.come(patricio);
addmodule.duerme(patricio);
addmodule.juega(patricio);

addmodule.estado(patricio);





