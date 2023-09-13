/* VIMOS EL EVENT LOOP */

/* ======    P R O M E S A S    ====== */
/* estas promesass trabajan con resolve y reject, si la promesa se cumple por eje: una peticion a una API, si se realiza el proceso que queremos la promesa se cumple  se ejecuta el RESOLVE, pero si la promesa por alguna razon falla ejecuta el REJECT

* Un SetTime recibe una callback y el tiempo,
* Una promesa recibe una callback con resolve y reject creado con new Promise
*/

function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject("error,el valor ingresado no es un numero");
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}
/* De esta forma se trabaja la promesa */
cuadradoPromise(0)
  .then((obj) => {
    //el then recibe la parte positiva de la promesa,en este caso un objeto y me imprime el objeto, tambien podemos usar los atributos del objeto
    //console.log(obj)
    console.log("INICIO PROMESA");
    console.log(`Promise:${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise:${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise:${obj.value}, ${obj.result}`);
    return cuadradoPromise("3");
  })
  .then((obj) => {
    console.log(`Promise:${obj.value}, ${obj.result}`);
    return cuadradoPromise(4);
  })
  .then((obj) => {
    console.log(`Promise:${obj.value}, ${obj.result}`);
    console.log("FIN PROMESA");
  })
  .catch((error) => {
    //el catch captura el error
    console.error(error);
  });
  /* Ejecuta y en el 3 se corta la ejecucion por ser string y se salta al Catch */
