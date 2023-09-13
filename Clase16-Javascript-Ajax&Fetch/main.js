/* Uso del fetch */

//Este metodo es asincronico

/*const url = `https://rickandmortyapi.com/api/character`;

//console.log(fetch(url))--> me va a mostrar Promise
fetch(url) //recibe argumentos
  .then((respuesta) => {
    //el json nos ayuda a ver la respuesta porque parsea el contenido
    respuesta.json();
   
  })
  .then((data) => {
    //la data anterior del then anterior la mostramos aqui
    console.log(data);
  });
  */

  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))

