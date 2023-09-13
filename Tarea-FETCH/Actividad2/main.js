const contenedor = document.querySelector(".container");

const form = document.querySelector("#form");
const cargarCards = (array) => {
  const string = array.reduce((acc, item) => {
    return (acc += ` <div class="item">
      <img src=${item.image} alt="">
      <div class="item-info">
      <h2>${item.name}</h2>
        <ul style="list-style: none;">
        <li>Estado:${item.estatus}</li>
        <li>Especie:${item.species}</li>
        <li>Genero:${item.gender}</li>
        <li>Ubicacion:${item.location.name}</li>
       </ul>
    </div>
      </div>`);
  }, "");
  contenedor.innerHTML = string;
};
//Debo usar el Try-Catch en ambos casos
function getData(nombre) {
  return fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`)
    .then((response) => {
     /* if (!response.ok) {
        //si el response.ok es verdadero significa que hay valor HTTP
        // pero si es falso  que indica un error, como 404 (no encontrado) o 500 (error interno del servidor).
        throw new Error("Error en la solicitud de datos"); //se corta y nos manda al catch
      }*/
      return response.json();
    })
    .then((response) => response);

  /*  if (response.results.length === 0) {
        throw new Error("No se encontraron resultados");
      }
      return response;
      */

  //me retorna una promesa del fetch(esta promesa  tiene los valores)
}
async function showData(nombre) {
  /*si solo asingamos el getData() nos mostrara una promesa, si usamos wl 
  await accedemos al dato de la promesa como un then()*/
  try {
    //primero traemos los resultados y verificamos
    const json = await getData(nombre);
    if (!json.results) {//existe o no 
      throw new Error("Los datos no contienen resultados válidos.");
    }
    cargarCards(json.results);
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

/*
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const personaje=document.querySelector("#personaje")
  //cada vez que presionamos el boton hace la busqueda del personaje 
  showData(personaje.value);
})
*/
showData("a");
const personaje = document.querySelector("#personaje");
personaje.addEventListener("input", (e) => {
  e.preventDefault();
  showData(e.target.value);
});
