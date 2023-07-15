//Ejercicio 01
            /*
            let correoUsuario = prompt("Ingrese su email");
            let band = false;
            for (let i = 0; i < correoUsuario.length; i++) {
              if (correoUsuario.charAt(i) === "@") {
                alert("Es un correo");
                break; //el break corta el bucle
              }
            }
            */
//Ejercicio 02
            /*
            let telefonoUsuario = prompt("Ingrese su numero telefonico");
            let cont = 0;

            for (let i = 0; i < telefonoUsuario.length; i++) cont++;
            if (cont === 10) alert("Su telefono ingresado es valido");
            else alert("El telefono ingresado no es valido");
            */

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
            alert(`La suma de todos los números pares da ${sumPar} número`);
            alert(`La suma de todos los números impares da ${sumImpar} número`);
                */

//Ejercicio 04

            for(let i=100;i<=250;i++){
                if(i%2===0){
                    console.log(`
                  La Raiz  cuadrada del numero par ${i} es: ${Math.sqrt(i)}`)
                }
                else  console.log(`
                La potencia cuadrada del numero par ${i} es: ${Math.pow(i,2)}`)
              }
            

        