function come(gato){
    let valor = aleatorio();
    gato.hambre -= valor;
}
        
function duerme(gato){
    let valor = aleatorio();
    gato.cansancio -= valor;
}

function juega(gato){
    let valor = aleatorio();
    gato.felicidad += valor;
}

function pasoTiempo(gato, tiempo){
        gato.felicidad -= tiempo;
        gato.hambre += tiempo;
        gato.cansancio += tiempo;
}

function estado(gato){
        console.log("Hambre: " + gato.hambre);
        console.log("Cansancio: " + gato.cansancio);
        console.log("Felicidad: " + gato.felicidad);
}

function aleatorio(){
    let aleatorio = ((parseInt)(Math.random() * 10) + 1);
    return aleatorio;
}


module.exports = {
    come : come,
    duerme: duerme,
    juega: juega,
    pasoTiempo: pasoTiempo,
    estado: estado,
    aleatorio: aleatorio
}