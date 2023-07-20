/* ================      FUNCIONES  =================== */

//EJERCICIO 01
/*
        const informacion=(calle,numero,departamento,codigoPostal,ciudad,pais)=>{
            alert(`La direccion que ah ingresado es : ${calle} ${numero}
            ${departamento}, ${codigoPostal}, ${ciudad}, ${pais}`);

        }
        informacion('machuca',985,'lima',22,'lima','peru');
        informacion('Arngentina',9555,'lima',224,'lima','peru');
        informacion('San miguel',988,'lima',212,'lima','peru');*/

//EJERCICIO 02
/*
        function MostrarPlaylist(
            nombrePlaylist,
            primeraCancion,
            segundaCancion,
            terceraCancion
            ) {
            const mensaje = `Se ha creado la playlist ${nombrePlaylist} con las canciones ${primeraCancion}, ${segundaCancion} y ${terceraCancion}`;
            return mensaje;
            }
            console.log(MostrarPlaylist('DiscoNuevo','nose','sise','tampoco-se'))
            console.log(MostrarPlaylist('DiscoViejo','dada','lala','tampoco-la'))
            console.log(MostrarPlaylist('DiscoActual','sonson','papapa','tampoco-di')
            */

//EJERCICIO 03
/*
            const conversion=(minutos)=>{

                let resultado=minutos*60;
                let mensaje=`El resultado de la conversión de ${minutos} minutos a segundos es: ${resultado}`;
                return mensaje;
            }
            console.log(conversion(2));
            console.log(conversion(3));
            console.log(conversion(4));*/

//EJERCICIO 04
/*
            function dias(dias){
                let resultado=dias*24*60*60;
                let mensaje=`El resultado de la conversión de ${dias} días a segundos es: ${resultado}`;
                return mensaje;
            }
            console.log(dias(2));
            console.log(dias(3));
            console.log(dias(4));   */

//EJERCICIO 05
/*
            function conversionKilometros(kilometros){
                            let resultado=kilometros/0.621371;

                            let mensaje=`El resultado de la conversión de ${kilometros} kilometros a millas es: ${resultado}`;
                            return mensaje;
                        }
                console.log(conversionKilometros(200));
                console.log(conversionKilometros(300));
                console.log(conversionKilometros(500)); */

//EJERCICIO 06
/*
            const areaTriangulo=(base,altura)=>{
                const resultado= (base*altura)/2;
                let mensaje =`El resultado del área del triángulo con base ${base} y altura ${altura} es: ${resultado}`;
                return mensaje;
            }
            console.log(areaTriangulo(6,5));
            console.log(areaTriangulo(10,5));
            console.log(areaTriangulo(45,4));  */

//EJERCICIO 07
/*
            const perimetroRectangulo=(base,altura)=>{
                const resultado= 2*(base+altura);
                let mensaje=`El resultado del perímetro del rectángulo con base ${base} y altura ${altura} es: ${resultado}`;
                return mensaje;
            }
            console.log(perimetroRectangulo(5,4));
            console.log(perimetroRectangulo(6,3));
            console.log(perimetroRectangulo(8,10));

            */

//EJERCICIO 08
/*
            function recorrido(recorrido) {
            const resultadoAPie = recorrido / 5;
            const resultadoEnBicicleta = recorrido / 10;
            const resultadoEnAuto = recorrido / 50;

            let mensaje = `Para la distancia ${recorrido} km en bicicleta el tiempo de viaje es ${resultadoEnBicicleta} hora/s, a pie ${resultadoAPie} hora/s y en auto ${resultadoEnAuto} hora/s`;
             return mensaje;
            }
            console.log(recorrido(200));
            */

// EJERCICIO 09
/*
            function funcionNueva(numeroDePartida, cantidad) {
            let cont = 1;
            
                            while(cont<=5){
                                numeroDePartida+=cantidad;
                                console.log(`Incremento ${cont}:${numeroDePartida}`);
                                cont++;
                            }
                            
            console.log(`\n\n`);

            for (let i = 1; i <= 5; i++) {
                numeroDePartida += cantidad;
                console.log(`Incremento ${i}:${numeroDePartida}`);
            }
            }
        funcionNueva(6, 1);
        funcionNueva(6, 2);
        funcionNueva(6, 3);
                */

//EJERCICIO 10

            const conversion = (gradosCelsius) => {
            const resultado = (gradosCelsius * 9) / 5 + 32;
            const mensaje = `La conversión de ${gradosCelsius} grados Celsius a Fahrenheit es: ${resultado}`;
            return mensaje;
            };

            console.log(conversion(200));
            console.log(conversion(100));
            console.log(conversion(150));
