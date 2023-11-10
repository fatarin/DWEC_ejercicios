class Poligono{
   
    constructor(puntos){
        
        let contador = 1;
        this.listaCoordenadas = [];
        for(let i = 0; i < puntos.length; i++){
            var nombre = "p";
            //console.log(puntos[i]);
            eval('this.' + nombre + contador + ' = puntos[' + i + '];');
            nombre+= contador;
            contador++;
            this.listaCoordenadas.push(eval('this.' + nombre));
        } 
    }

     compruebaPoligono(){
        let valido;
        //compruebo si estoy validando un posible triangulo
        if(this.listaCoordenadas.length == 3){     
            if((this.p1.x == this.p2.x) && (this.p1.x == this.p3.x)){       //si coordenada X no varía no hay triangulo
                valido = false;
            }else if((this.p1.y == this.p2.y) && (this.p1.y == this.p3.y)){     //si coordenada Y no varía no hay triangulo
                valido = false;
            }else valido = true;
            
        }else if(this.listaCoordenadas.length == 4){       //compruebo si estoy validando un posible cuadrado
            let coordenadas = new Set();
            for(let element in puntos){
                coordenadas.add(puntos[element].x);
                coordenadas.add(puntos[element].y);
            }
            valido = coordenadas.size;
            
              
        }
        return valido;
    }

    doble(){
        let doble = false;
        for(let element in this.listaCoordenadas){
            //reviso si existe la coordenada 0,0
            if(this.listaCoordenadas[element].x == this.listaCoordenadas[element].y){
                doble = true;
                return doble;
            }
            
        }
        return doble;
    }
} 

class Punto{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

class Cuadrado extends Poligono{
    constructor(puntos){
        super(puntos);
    }

    calculaLado(p1, p2){
        let lado = 0;
        if(p1.x == p2.x){     
            if(p1.y < p2.y){lado = p2.y - p1.y}
                else(lado = p1.y - p2.y)
        }
        return lado
       
    }

    perimetro(){
        let valido = this.compruebaPoligono();
        let perimetro;
        let doble = this.doble();    

        if((valido == 2 && doble) || (valido == 4 && !doble)){
            //busco dos puntos con la misma coordenada X
            let p1_p2 = this.calculaLado(this.p1, this.p2);
            if(p1_p2 > 0){
                perimetro = p1_p2 * 4;
                return perimetro;
            }

            let p1_p3 = this.calculaLado(this.p1, this.p3);
            if(p1_p3 > 0){
                perimetro = p1_p3 * 4;
                return perimetro;
            }

            let p1_p4 = this.calculaLado(this.p1, this.p4);
            if(p1_p4 > 0){
                perimetro = p1_p4 * 4;
                return perimetro;
            }
   
        }else console.log("Este conjunto de puntos no forman un cuadrado");
    }
}

class Rectangulo extends Poligono{
    constructor(puntos){
        super(puntos);
    }

    calculaLadoX(p1, p2, p3, p4){
        let lado = 0;
        if(p1.y == p2.y){
            if(p1.x < p2.x){lado = p2.x - p1.x}
                else lado = p1.x - p2.x;
        }else if(p1.y == p3.y){
            if(p1.y < p3.y){lado = p3.x - p1.x}
                else lado = p1.x - p3.x;
        }else{
            if(p1.x < p4.x){lado = p4.x - p1.x}
                else lado = p1.x - p4.x;
        }
        return lado;
       
    }

    calculaLadoY(p1, p2, p3, p4){
        let lado = 0;
        if(p1.x == p2.x){
            if(p1.y < p2.y){lado = p2.y - p1.y}
                else lado = p1.y - p2.y;
        }else if(p1.x == p3.x){
            if(p1.y < p3.y){lado = p3.y - p1.y}
                else lado = p1.y - p3.y;
        }else{
            if(p1.y < p4.y){lado = p4.y - p1.y}
                else lado = p1.y - p4.y;
        }
        return lado;
       
    }

    perimetro(){
     let valido = this.compruebaPoligono();
     let doble = this.doble();
     let perimetro;
     let perimetroX;
     let perimetroY;
        if(valido == 3){
            perimetroX = this.calculaLadoX(this.p1, this.p2, this.p3, this.p4);
            perimetroY = this.calculaLadoY(this.p1, this.p2, this.p3, this.p4);
            perimetro = (perimetroX * 2) + (perimetroY * 2);
            
            return perimetro;

        }else console.log("Este conjunto de puntos no forman un rectangulo");
    }
    
}

class Triagulo extends Poligono{
    constructor(puntos){
        super(puntos);
    }

    calculaLado(p1, p2){
        let difx;
        let dify;
            if(p1.x > p2.x){difx = p1.x - p2.x;}
                else if(p1.x < p2.x){difx = p2.x - p1.x}
                    else difx = 0;
            if(p1.y > p2.y){dify = p1.y - p2.y;}
                else if(p1.y < p2.y){dify = p2.y - p1.y}
                    else dify = 0;
        let lado = Math.sqrt((Math.pow(difx, 2) + Math.pow(dify, 2)));
        return lado;
    }

    perimetro(){
        let valido = this.compruebaPoligono();
        if(valido == true){
            //para cada par de puntos calculo hipotenusa (distancia)
            
            let p1_p2 = this.calculaLado(this.p1, this.p2);
            let p2_p3 = this.calculaLado(this.p2, this.p3);
            let p1_p3 = this.calculaLado(this.p1, this.p3);
            
            let perimetro = p1_p2 + p2_p3 + p1_p3;
            return perimetro;
            
        }else console.log("Estos tres puntos no forman un triángulo")
           
        
    }
}

let p1 = new Punto(1,2);
let p2 = new Punto(3,2);
let p3 = new Punto(1,4);
let p4 = new Punto(3,4);


/* //pruebas triangulo
let puntos = [p1, p2, p3];
let perimetro = 0;
let triangulo = new Triagulo(puntos);
console.log(triangulo.p1); 
console.log(triangulo.p2); 
console.log(triangulo.p3); 
perimetro = triangulo.perimetro();  */

//pruebas cuadrado
let puntos = [p1, p2, p3, p4];
let perimetro = 0;
let cuadrado = new Cuadrado(puntos);
console.log(cuadrado.p1); 
console.log(cuadrado.p2); 
console.log(cuadrado.p3); 
console.log(cuadrado.p4); 
perimetro = cuadrado.perimetro(); 



/* //pruebas rectangulo
let puntos = [p1, p2, p3, p4];
let perimetro = 0;
let rectangulo = new Rectangulo(puntos);
console.log(rectangulo.p1); 
console.log(rectangulo.p2); 
console.log(rectangulo.p3); 
console.log(rectangulo.p4); 
perimetro= rectangulo.perimetro();   */

console.log("Perímetro: " + perimetro);
