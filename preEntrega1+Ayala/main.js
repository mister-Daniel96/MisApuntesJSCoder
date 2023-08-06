//Ejercicio 01
/*
            let correoUsuario = prompt("Ingrese su email");
          let band=false;
            for (let i = 0; i < correoUsuario.length; i++) {
              if (correoUsuario.charAt(i) === "@") {
               band=true;break;
              }
            }
            if(band)console.log('Es un mail valido');
            else console.log('Es un mail invalido');
            */
//Ejercicio 02

//const numberVerificar = /^[0-9]+$/;
let telefonoUsuario = prompt("Ingrese su numero telefonico");
let cont = 0;

if (!verificar(telefonoUsuario)) {
  for (let i = 0; i < telefonoUsuario.length; i++) cont++;

  if (cont === 10) alert("Su telefono ingresado es valido");
  else alert("El telefono no cumple con los 10 digitos");
} else alert("El telefono dispone de algun caracter y es incorrecto");

function verificar(numero) {
  let band = true;
  for (let i = 0; i < numero.length; i++) {
    if (
      numero[i] == "1" ||
      numero[i] == "2" ||
      numero[i] == "3" ||
      numero[i] == "4" ||
      numero[i] == "5" ||
      numero[i] == "6" ||
      numero[i] == "7" ||
      numero[i] == "8" ||
      numero[i] == "9" ||
      numero[i] == "0"
    ) {
      band = false;
    } else band = true;

  }
  return band;
}
console.log(verificar(telefonoUsuario));
//Ejercicio 03
/*
            let numeroMinimo = prompt("Ingrese el numero minimo");
            let numeroMaximo = prompt("Ingrese el numero maximo");

            numeroMinimo = Number(numeroMinimo);
            numeroMaximo = Number(numeroMaximo);

            let sumPar = 0;
            let sumImpar = 0;
            for (let i = numeroMinimo; i <= numeroMaximo; i++) {
              if (i % 2 === 0) sumPar += i;
              else sumImpar += i;
            }
            alert(`La suma de todos los números pares da ${sumPar} `);
            alert(`La suma de todos los números impares da ${sumImpar} `);
                */

//Ejercicio 04
/*
            for(let i=100;i<=250;i++){
                if(i%2===0){
                    console.log(`
                  La Raiz  cuadrada del numero par ${i} es: ${Math.sqrt(i)}`)
                }
                else  console.log(`
                La potencia cuadrada del numero par ${i} es: ${Math.pow(i,2)}`)
              }
            
*/
