let tablero = {
    fila1: ["X", "X", "O"],
    fila2: ["X", "O", "O"],
    fila3: ["O", "X", "X"]
}


for(let fila in tablero){
    let linea = "";
    
    for(let i=0; i < tablero[fila].length; i++){
        linea += tablero[fila][i];
        if(i < (tablero[fila].length - 1))
            linea += "-";
    };
    console.log(linea);
    
}