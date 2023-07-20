// Ejercicio 01
//let colorDefinido="rojo";
//let colorSemaforoActual = "Rojo";


let colorDefinido = prompt("Ingrese un color");
 if (colorDefinido === "rojo") {
  alert("Puede avanzar");
} else if (colorDefinido === "verde") {
  alert("Puede avanzar");
} else if (colorDefinido === "amarillo") {
  alert("Puede avanzar");
} else if (colorDefinido ==="") {
  alert("No puede ingresar una data vacia");
} else alert("No puede avanzar"); 

//EJERCICIO 02

/* let vocal=prompt("Ingrese la vocal");

if(vocal==="a"){
    alert("Es una vocal");
}else if(vocal==="e"){
    alert("Es una vocal");
}else if(vocal==="i"){
    alert("Es una vocal");
}else if(vocal==="o"){
    alert("Es una vocal");
}else if(vocal==="u"){
    alert("Es una vocal");
}else if(vocal===""){
    alert("La data ingresada esta vacia");
}else alert("El valor ingresado no es una vocal"); */

//EJERCICIO 03
/*
let consonante = prompt("Ingrese la consonante");

if (
  consonante !== "a" &&
  consonante !== "e" &&
  consonante !== "i" &&
  consonante !== "o" &&
  consonante !== "u"
) {
  alert("Es una consonante");
} else alert("No es una consonante");


//EJERCICIO 04
    if (pasoTests && !tieneMultasImpagas && pagoImpuestos) {
      console.log(true);
    } else {
      console.log(false);
    }
  
*/
    //EJERCICIO05

    let variable =3;

    if(variable%2===0){
        console.log("Es par");
    }
    else console.log("Es impar")

    if(variable>0){
        console.log("El numero es positivo");
    }else if( variable <0){
        console.log("El numero es negativo");
    }else console.log("El numero es neutro donde es 0");