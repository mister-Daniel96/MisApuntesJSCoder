const contenedor = document.querySelector(".container");

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

async function showData() {
  const json = await getData();
  /*vemos y tenemos dos claves  info y results
     dentro de results estan los datos a usar para 
    trabajar (es un arreglo de objetos)
  */
  cargarCards(json.results);
  console.log(json.results[2]);
}
function getData() {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((respons) => respons.json())
    .then((response) => response);
}

showData();
