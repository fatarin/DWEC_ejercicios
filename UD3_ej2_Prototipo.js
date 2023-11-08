const addmodule = require ('./UD3_ej2_modulos.js');

let prototipo = {
    hambre: 15,
    cansancio: 15,
    felicidad: 15,
    comer: function come(){
        let valor = addmodule.aleatorio();
        this.hambre -= valor;
    },
    dormir: function duerme(){
        let valor = addmodule.aleatorio();
        this.cansancio -= valor;
    },
    jugar: function juega(){
        let valor = addmodule.aleatorio();
        this.felicidad += valor;
    },
    pasoTiempo: function pasoTiempo(tiempo){
        let valor = addmodule.aleatorio();
        this.felicidad -= valor;
        this.hambre += valor;
        this.cansancio += valor;
        }
}

let lola = Object.create(prototipo);
console.log("Estado inicial:" );
addmodule.estado(lola);
console.log("Interacción: come, juega");
lola.comer();
lola.jugar();
console.log("Estado: \n")
addmodule.estado(lola);
console.log("Paso del tiempo");
lola.pasoTiempo();
console.log("Estado: \n")
addmodule.estado(lola);
console.log("Interacción: duerme");
lola.dormir();
console.log("Estado: \n")
addmodule.estado(lola);

